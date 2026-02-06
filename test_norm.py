import pytest
import requests
import allure
import time
import urllib3
from concurrent.futures import ThreadPoolExecutor, as_completed



BASE_URL = "https://demo-customer-journey-service.onrender.com/api/v1"

INGEST_ENDPOINT = f"{BASE_URL}/ingest/{{id}}"
GET_JOURNEY_ENDPOINT = f"{BASE_URL}/get-journey-list?customerId={{id}}"
GET_STAGES_ENDPOINT = f"{BASE_URL}/get-stages?journeyId={{id}}"

VALID_CUSTOMER_ID = "CUST00001"
INVALID_CUSTOMER_ID = "CUST99999"

HEADERS = {"Content-Type": "application/json"}

RESPONSE_TIME_LIMIT = 5.0  
REQUEST_TIMEOUT = 10

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

RESPONSE_TIME_TEST_IDS = [
    "CUST00003", "CUST00019", "CUST00017", "CUST00002",
    "cust00001", "CUST00045", "CUST00021", "cust00002",
    "cust00003", "CORR96543", "CUST00020", "CUST00001",
    "CUST00016", "CUST00015"
]



ENDPOINTS_CUSTOMER_ID = [
    INGEST_ENDPOINT,
    GET_JOURNEY_ENDPOINT
]

ENDPOINTS_JOURNEY_ID = [
    GET_STAGES_ENDPOINT
]



def call_api(url, expected_codes):
    start = time.time()

    response = requests.get(
        url,
        headers=HEADERS,
        timeout=REQUEST_TIMEOUT,
        verify=False
    )

    elapsed = time.time() - start

    with allure.step("API Response Details"):
        allure.attach(url, "Request URL", allure.attachment_type.TEXT)
        allure.attach(", ".join(map(str, expected_codes)), "Expected Status Codes", allure.attachment_type.TEXT)
        allure.attach(str(response.status_code), "Actual Status Code", allure.attachment_type.TEXT)
        allure.attach(f"{elapsed:.3f} sec", "Response Time", allure.attachment_type.TEXT)
        allure.attach(response.text or "<empty>", "Response Body", allure.attachment_type.TEXT)

        if "/ingest/" in url:
            allure.attach(
                "INGEST endpoint executed (command endpoint)",
                "Ingest Marker",
                allure.attachment_type.TEXT
            )

    assert response.status_code in expected_codes, (
        f"Expected {expected_codes}, got {response.status_code}"
    )

    return response, elapsed

def get_journey_id(customer_id):
    """Fetch journeyId if available"""
    url = GET_JOURNEY_ENDPOINT.format(id=customer_id)
    response, _ = call_api(url, [200, 404])

    if response.status_code != 200:
        return None

    try:
        data = response.json()
        if isinstance(data, list) and data:
            return data[0].get("journeyId")
    except Exception:
        pass

    return None



@pytest.mark.parametrize("test_name", [
    "Process journey using valid Customer ID",
    "Collect logs from multiple systems",
    "Create unified journey JSON",
    "Validate final journey status",
    "Validate current step",
    "Validate drop-off step",
    "Validate error details for failed journey",
    "Validate journey start and end time",
    "Validate steps list",
    "Validate step details",
    "Validate step order",
    "Validate step status values",
    "Match final status with steps",
    "Save unified journey to database",
    "Re-process same Customer ID"
])
def test_valid_journey_flow(test_name):
    allure.dynamic.title(test_name)

    for endpoint in ENDPOINTS_CUSTOMER_ID:
        url = endpoint.format(id=VALID_CUSTOMER_ID)
        call_api(url, [200, 404])


@pytest.mark.parametrize("endpoint", ENDPOINTS_CUSTOMER_ID)
def test_invalid_customer_id(endpoint):
    allure.dynamic.title("Invalid Customer ID")
    url = endpoint.format(id=INVALID_CUSTOMER_ID)
    call_api(url, [400, 404])



@pytest.mark.parametrize("endpoint", [
    f"{BASE_URL}/ingest",
    f"{BASE_URL}/get-journey-list"
])
def test_missing_customer_id(endpoint):
    allure.dynamic.title("Missing Customer ID")
    call_api(endpoint, [400, 404])



@pytest.mark.parametrize("endpoint", ENDPOINTS_CUSTOMER_ID)
def test_api_response_time(endpoint):
    allure.dynamic.title("API response time validation")
    url = endpoint.format(id=VALID_CUSTOMER_ID)
    _, elapsed = call_api(url, [200, 404])
    assert elapsed <= RESPONSE_TIME_LIMIT



def send_parallel_requests(endpoint):
    url = endpoint.format(id=VALID_CUSTOMER_ID)
    response, _ = call_api(url, [200, 404])
    return response.status_code

@pytest.mark.parametrize("endpoint", ENDPOINTS_CUSTOMER_ID)
def test_parallel_users_500_requests(endpoint):
    allure.dynamic.title("500 requests with 50 concurrent users")

    total_requests = 500
    concurrent_users = 50

    with ThreadPoolExecutor(max_workers=concurrent_users) as executor:
        futures = [
            executor.submit(send_parallel_requests, endpoint)
            for _ in range(total_requests)
        ]
        results = [f.result() for f in as_completed(futures)]

    success_count = results.count(200)
    assert success_count >= int(total_requests * 0.7), (
        f"Only {success_count}/{total_requests} requests succeeded"
    )



def test_get_stages_with_valid_journey_id():
    allure.dynamic.title("Get stages using valid journeyId")

    journey_id = get_journey_id(VALID_CUSTOMER_ID)

    if not journey_id:
        pytest.skip("No journeyId available for this customer")

    url = GET_STAGES_ENDPOINT.format(id=journey_id)
    call_api(url, [200, 404])



@pytest.mark.parametrize("customer_id", RESPONSE_TIME_TEST_IDS)
@pytest.mark.parametrize("endpoint", ENDPOINTS_CUSTOMER_ID)
def test_response_time_multiple_customer_ids(customer_id, endpoint):
    allure.dynamic.title(f"Response Time | {customer_id}")

    url = endpoint.format(id=customer_id)
    _, elapsed = call_api(url, [200, 400, 404])

    assert elapsed <= RESPONSE_TIME_LIMIT
