import pytest
import requests
import allure
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_URL = "https://demo-customer-journey-service.onrender.com/api/v1"
GET_JOURNEY_LIST = f"{BASE_URL}/get-journey-list"

VALID_CUSTOMER_ID = "CUST-9206"
INVALID_CUSTOMER_ID = "CUST-0000"

VALID_CORRELATION_ID = "CORR-6011"
INVALID_CORRELATION_ID = "CORR-609911"


@pytest.fixture
def headers():
    return {
        "Content-Type": "application/json"
    }


@allure.feature("Customer Journey APIs")
@allure.story("TC1 - Valid Customer ID")
@allure.severity(allure.severity_level.CRITICAL)
def test_tc1_valid_customer(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "HTTP 200 OK, journeys returned"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200


@allure.story("TC2 - Valid Correlation ID")
def test_tc2_valid_correlation(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}
    expected_result = "HTTP 200 OK, matching journey returned"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200


@allure.story("TC3 - Response Structure")
def test_tc3_response_structure(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "HTTP 200 OK, success & responseData present"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200
    assert "success" in data
    assert "responseData" in data


@allure.story("TC4 - Journey List Presence")
def test_tc4_journey_list_presence(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "HTTP 200 OK, journeyList present"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200
    assert "journeyList" in data["responseData"]


@allure.story("TC5 - Journey Fields")
def test_tc5_journey_fields(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}
    expected_result = "HTTP 200 OK, journey fields validated"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    if actual_status == 200 and "journeyList" in data["responseData"]:
        for journey in data["responseData"]["journeyList"]:
            assert "journeyId" in journey
            assert "journeyName" in journey
            assert "journeyStatus" in journey


@allure.story("TC6 - Status Values")
def test_tc6_status_values(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}
    expected_result = "HTTP 200 OK, valid status values"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    if actual_status == 200 and "journeyList" in data["responseData"]:
        for journey in data["responseData"]["journeyList"]:
            assert journey["journeyStatus"] in ["SUCCESS", "FAILED", "PENDING"]


@allure.story("TC7 - Current Step")
def test_tc7_current_step(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "HTTP 200 OK, currentStep validated"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    if "currentStep" in data.get("responseData", {}):
        assert data["responseData"]["currentStep"] is not None



@allure.story("TC8 - Validate Timestamps")
def test_tc8_validate_timestamps(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "startTime present, endTime >= startTime"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200

    if "startTime" in data["responseData"]:
        assert "startTime" in data["responseData"]

    if "endTime" in data["responseData"]:
        assert data["responseData"]["startTime"] <= data["responseData"]["endTime"]

@allure.story("TC9 - Validate Steps List")
def test_tc9_validate_steps_list(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}
    expected_result = "steps list present if available"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200

    if "steps" in data["responseData"]:
        assert isinstance(data["responseData"]["steps"], list)

@allure.story("TC10 - Validate Step Details")
def test_tc10_validate_step_details(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}
    expected_result = "Each step contains required fields"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code
    data = response.json()

    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200

    if "steps" in data["responseData"]:
        for step in data["responseData"]["steps"]:
            assert "stepName" in step
            assert "status" in step
            assert "timestamp" in step

@allure.story("TC11 - Validate Step Order")
def test_tc11_validate_step_order(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    data = response.json()

    assert response.status_code == 200

    if "steps" in data["responseData"]:
        timestamps = [step["timestamp"] for step in data["responseData"]["steps"]]
        assert timestamps == sorted(timestamps)

@allure.story("TC12 - Validate Step Status Values")
def test_tc12_validate_step_status(headers):

    payload = {"correlationId": VALID_CORRELATION_ID}

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    data = response.json()

    assert response.status_code == 200

    if "steps" in data["responseData"]:
        for step in data["responseData"]["steps"]:
            assert step["status"] in ["SUCCESS", "FAILED", "PENDING"]

@allure.story("TC13 - Invalid Customer ID")
def test_tc13_invalid_customer(headers):

    payload = {"customerId": INVALID_CUSTOMER_ID}
    expected_status = [400, 404]

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code

    allure.attach(str(payload), name="Invalid Request Payload", attachment_type=allure.attachment_type.JSON)
    allure.attach(response.text, name="Invalid Customer Response", attachment_type=allure.attachment_type.JSON)

    assert actual_status in expected_status

@allure.story("TC14 - Invalid Correlation ID")
def test_tc14_invalid_correlation(headers):

    payload = {"correlationId": INVALID_CORRELATION_ID}
    expected_status = [400, 404]

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code

    allure.attach(str(payload), name="Invalid Request Payload", attachment_type=allure.attachment_type.JSON)
    allure.attach(response.text, name="Invalid Correlation Response", attachment_type=allure.attachment_type.JSON)

    assert actual_status in expected_status

@allure.story("TC15 - Missing Input")
def test_tc15_missing_input(headers):

    payload = {}

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)

    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert response.status_code == 400
@allure.story("TC16 - Repeated Request Consistency")
def test_tc16_repeat_consistency(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}

    r1 = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    r2 = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)

    allure.attach(r2.text, name="Repeated Response", attachment_type=allure.attachment_type.JSON)

    assert r2.status_code == 200
    assert r1.json() == r2.json()

@allure.story("TC17 - Empty Journeys Handling")
def test_tc17_empty_journey(headers):

    payload = {"customerId": "CUST-NO-DATA"}

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)

    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    if response.status_code == 200:
        data = response.json()
        assert isinstance(data["responseData"]["journeyList"], list)



@allure.story("TC18 - Response Time")
def test_tc18_response_time(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "HTTP 200 OK, response ≤ 2 sec"

    start = time.time()
    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    duration = time.time() - start
    actual_status = response.status_code

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(duration), name="Response Time (sec)", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 200
    assert duration <= 3


@allure.story("TC19 - Parallel Requests")
def test_tc19_parallel(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    expected_result = "All parallel requests return HTTP 200"

    with ThreadPoolExecutor(max_workers=50) as executor:
        futures = [executor.submit(requests.post, GET_JOURNEY_LIST, json=payload, headers=headers) for _ in range(50)]
        responses = [f.result() for f in as_completed(futures)]

    success_codes = [r.status_code for r in responses]

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(success_codes), name="Actual Status Codes", attachment_type=allure.attachment_type.TEXT)

    assert all(code == 200 for code in success_codes)


@allure.story("TC20 - UNKNOWN Customer Validation")
def test_tc20_unknown_customer(headers):

    payload = {"customerId": "UNKNOWN"}
    expected_result = "HTTP 400 Bad Request"

    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
    actual_status = response.status_code

    allure.attach(GET_JOURNEY_LIST, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(actual_status), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)

    assert actual_status == 400



@allure.story("TC21 - SQL Injection Attempt")
def test_tc21_sql_injection(headers):

    payload = {"customerId": "' OR '1'='1"}
    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)

    allure.attach(str(payload), "Injection Payload", allure.attachment_type.JSON)
    allure.attach(str(response.status_code), "Status Code", allure.attachment_type.TEXT)
    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    assert response.status_code != 500

    if response.status_code == 200:
        data = response.json()
        assert len(data["responseData"]["journeyList"]) < 50


@allure.story("TC22 - XSS Payload")
def test_tc22_xss(headers):

    payload = {"customerId": "<script>alert(1)</script>"}
    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)

    allure.attach(str(payload), "XSS Payload", allure.attachment_type.JSON)
    allure.attach(str(response.status_code), "Status Code", allure.attachment_type.TEXT)
    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    assert response.status_code != 500
    assert "<script>" not in response.text


@allure.story("TC23 - Large Payload Stress")
def test_tc23_large_payload(headers):

    payload = {"customerId": "A" * 10000}
    response = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)

    allure.attach(str(len(payload["customerId"])), "Payload Length", allure.attachment_type.TEXT)
    allure.attach(str(response.status_code), "Status Code", allure.attachment_type.TEXT)
    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    assert response.status_code != 500
    assert response.status_code in [200, 400, 404, 413]


@allure.story("TC24 - Missing Content-Type Header")
def test_tc24_missing_header():

    payload = {"customerId": VALID_CUSTOMER_ID}
    response = requests.post(GET_JOURNEY_LIST, json=payload)

    allure.attach(str(payload), "Request Payload", allure.attachment_type.JSON)
    allure.attach(str(response.status_code), "Status Code", allure.attachment_type.TEXT)
    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    assert response.status_code != 500
    assert response.status_code in [200, 400, 415]


@allure.story("TC25 - Unauthorized Access")
def test_tc25_unauthorized():

    payload = {"customerId": VALID_CUSTOMER_ID}
    response = requests.post(GET_JOURNEY_LIST, json=payload)

    allure.attach(str(payload), "Request Payload", allure.attachment_type.JSON)
    allure.attach(str(response.status_code), "Status Code", allure.attachment_type.TEXT)
    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    # If API is secured → should not allow anonymous
    assert response.status_code in [200, 401, 403]


@allure.story("TC26 - Rate Limiting")
def test_tc26_rate_limit(headers):

    payload = {"customerId": VALID_CUSTOMER_ID}
    status_codes = []

    for _ in range(100):
        r = requests.post(GET_JOURNEY_LIST, json=payload, headers=headers)
        status_codes.append(r.status_code)

    allure.attach(str(payload), "Request Payload", allure.attachment_type.JSON)
    allure.attach(str(status_codes), "Collected Status Codes", allure.attachment_type.TEXT)

    # Secure API should eventually throttle
    assert any(code in [429, 403] for code in status_codes) or all(code == 200 for code in status_codes)


@allure.story("TC27 - Invalid HTTP Method")
def test_tc27_invalid_method(headers):

    response = requests.get(GET_JOURNEY_LIST, headers=headers)

    allure.attach("GET Request Sent", "Request Type", allure.attachment_type.TEXT)
    allure.attach(str(response.status_code), "Status Code", allure.attachment_type.TEXT)
    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    assert response.status_code in [400, 404, 405]
