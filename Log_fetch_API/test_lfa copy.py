import pytest
import requests
import allure
import re
import time
import json
import urllib3
from concurrent.futures import ThreadPoolExecutor, as_completed

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE_URL = "https://log-fetching-5.onrender.com/api/v1/logs"

VALID_CUSTOMER_ID = "CUST00001"
VALID_CORRELATION_ID = "CORR96543"
INVALID_CUSTOMER_ID = "CUST99999"
INVALID_CORRELATION_ID = "CORR99999"

MAX_RESPONSE_TIME = 2.0

EXPECTED_FAILURE_ERROR_CODES = [
    "KYC_FAILED",
    "VERIFICATION_FAILED",
    "LINK_EXPIRED",
    "SYSTEM_ERROR",
    "VALIDATION_ERROR",
    "ERR_LINK_NOT_OPENED"
]

MANDATORY_FIELDS = [
    "applicationSuccessType",
    "cardLimit",
    "cardType",
    "correlationId",
    "customerCibil",
    "customerId",
    "customerIncome",
    "customerName",
    "errorCodes",
    "failureStep",
    "id",
    "jsonStructures",
    "linkOpenStatus",
    "linkSubmitStatus",
    "sourceSystem",
    "transactionDate",
    "transactionId"
]

VALID_APPLICATION_STATUS = ["success", "failure", "pending"]

VALID_SOURCE_SYSTEMS = [
    "WEB",
    "MOBILE",
    "PARTNER",
    "FRONTEND",
    "APPLICATION_SERVICE"
]

VALID_TRANSACTION_STEPS = [
    "Link Not Opened",
    "Link Opened",
    "Form Started",
    "KYC Submitted",
    "Verification",
    "Completed"
]


def fetch_logs(query=None):
    params = {"query": query} if query else None
    start = time.time()

    response = requests.get(
        BASE_URL,
        params=params,
        verify=False,
        timeout=10
    )

    response.response_time = round(time.time() - start, 3)
    return response


def extract_logs(response):
    try:
        body = response.json()
        return body.get("content", [])
    except Exception:
        return []


def attach_api_details_to_allure(
    description: str,
    expected_status,
    response
):
    allure.attach(
        description,
        name="Test Description",
        attachment_type=allure.attachment_type.TEXT
    )

    allure.attach(
        str(expected_status),
        name="Expected Status Code(s)",
        attachment_type=allure.attachment_type.TEXT
    )

    allure.attach(
        str(response.status_code),
        name="Actual Status Code",
        attachment_type=allure.attachment_type.TEXT
    )

    allure.attach(
        response.url,
        name="Request URL",
        attachment_type=allure.attachment_type.TEXT
    )

    allure.attach(
        f"{response.response_time} seconds",
        name="Response Time",
        attachment_type=allure.attachment_type.TEXT
    )

    try:
        allure.attach(
            json.dumps(response.json(), indent=2),
            name="Response Body",
            attachment_type=allure.attachment_type.JSON
        )
    except Exception:
        allure.attach(
            response.text,
            name="Response Body (Raw)",
            attachment_type=allure.attachment_type.TEXT
        )


@allure.title("TC01 - Fetch logs using valid Customer ID")
def test_fetch_logs_valid_customer_id():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Fetch logs using valid Customer ID",
        200,
        response
    )
    assert response.status_code == 200
    logs = extract_logs(response)
    assert logs
    for log in logs:
        assert log["customerId"] == VALID_CUSTOMER_ID


@allure.title("TC02 - Fetch logs using valid Correlation ID")
def test_fetch_logs_valid_correlation_id():
    response = fetch_logs(VALID_CORRELATION_ID)
    attach_api_details_to_allure(
        "Fetch logs using valid Correlation ID",
        200,
        response
    )
    assert response.status_code == 200
    for log in extract_logs(response):
        assert log["correlationId"] == VALID_CORRELATION_ID


@allure.title("TC03 - Fetch logs using invalid Customer ID")
def test_invalid_customer_id():
    response = fetch_logs(INVALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Fetch logs using invalid Customer ID",
        [200, 404],
        response
    )
    assert response.status_code in [200, 404]
    if response.status_code == 200:
        assert extract_logs(response) == []


@allure.title("TC04 - Fetch logs using invalid Correlation ID")
def test_invalid_correlation_id():
    response = fetch_logs(INVALID_CORRELATION_ID)
    attach_api_details_to_allure(
        "Fetch logs using invalid Correlation ID",
        [200, 404],
        response
    )
    assert response.status_code in [200, 404]
    if response.status_code == 200:
        assert extract_logs(response) == []


@allure.title("TC05 - Fetch logs without query parameter")
def test_missing_query_parameter():
    response = fetch_logs()
    attach_api_details_to_allure(
        "Fetch logs without query parameter",
        400,
        response
    )
    assert response.status_code == 400


@allure.title("TC06 - Validate response format")
def test_response_format():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate response format",
        200,
        response
    )
    logs = extract_logs(response)
    assert isinstance(logs, list)


@allure.title("TC07 - Validate mandatory fields")
def test_mandatory_fields_present():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate mandatory fields",
        200,
        response
    )
    for log in extract_logs(response):
        for field in MANDATORY_FIELDS:
            assert field in log


@allure.title("TC08 - Validate applicationSuccessType values")
def test_application_success_type():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate applicationSuccessType values",
        200,
        response
    )
    for log in extract_logs(response):
        assert log["applicationSuccessType"] in VALID_APPLICATION_STATUS


@allure.title("TC09 - Validate failure records contain error details")
def test_failure_records_error_codes():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate failure records contain error details",
        200,
        response
    )
    for log in extract_logs(response):
        if log["applicationSuccessType"] == "failure":
            assert log["errorCodes"]
            assert log["failureStep"]


@allure.title("TC10 - Validate pending records contain incomplete status")
def test_pending_records():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate pending records",
        200,
        response
    )
    for log in extract_logs(response):
        if log["applicationSuccessType"] == "pending":
            assert log["linkSubmitStatus"] == "Not Submitted"


@allure.title("TC11 - Validate link status consistency")
def test_link_status_consistency():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate link status consistency",
        200,
        response
    )
    for log in extract_logs(response):
        if log["linkOpenStatus"] == "Not Opened":
            assert log["linkSubmitStatus"] == "Not Submitted"


@allure.title("TC12 - Validate source system values")
def test_source_system_values():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate source system values",
        200,
        response
    )
    for log in extract_logs(response):
        assert log["sourceSystem"] in VALID_SOURCE_SYSTEMS


@allure.title("TC13 - Validate transaction steps presence")
def test_transaction_steps_present():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate transaction steps presence",
        200,
        response
    )
    steps = [log.get("transactionStep") for log in extract_logs(response)]
    assert any(step in VALID_TRANSACTION_STEPS for step in steps if step)


@allure.title("TC14 - Validate transaction step matches failure step")
def test_transaction_step_matches_failure_step():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate transaction step matches failure step",
        200,
        response
    )
    for log in extract_logs(response):
        if log["applicationSuccessType"] == "failure":
            assert log["transactionStep"] == log["failureStep"]


@allure.title("TC15 - Validate transaction date format")
def test_transaction_date_format():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate transaction date format",
        200,
        response
    )
    pattern = r"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}"
    for log in extract_logs(response):
        assert re.match(pattern, log["transactionDate"])


@allure.title("TC16 - Validate unique transaction IDs")
def test_unique_transaction_ids():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate unique transaction IDs",
        200,
        response
    )
    ids = [log["transactionId"] for log in extract_logs(response)]
    assert len(ids) == len(set(ids))


@allure.title("TC17 - Validate API performance")
def test_api_performance():
    response = fetch_logs(VALID_CUSTOMER_ID)
    attach_api_details_to_allure(
        "Validate API performance",
        200,
        response
    )
    assert response.response_time < MAX_RESPONSE_TIME


@allure.title("TC18 - Search with uppercase Customer ID")
def test_uppercase_customer_id():
    response = fetch_logs(VALID_CUSTOMER_ID.upper())
    attach_api_details_to_allure(
        "Search with uppercase Customer ID",
        200,
        response
    )
    assert response.status_code == 200


@allure.title("TC19 - Search with lowercase Customer ID")
def test_lowercase_customer_id():
    response = fetch_logs(VALID_CUSTOMER_ID.lower())
    attach_api_details_to_allure(
        "Search with lowercase Customer ID",
        [200, 404],
        response
    )
    assert response.status_code in [200, 404]


@allure.title("TC20 - Search with special characters")
def test_special_characters():
    response = fetch_logs("@#$%^&*")
    attach_api_details_to_allure(
        "Search with special characters",
        [200, 400, 404, 422],
        response
    )
    assert response.status_code in [200, 400, 404, 422]


@allure.title("TC21 - Search with very long query value")
def test_long_query_value():
    response = fetch_logs("A" * 5000)
    attach_api_details_to_allure(
        "Search with very long query value",
        [200, 400, 404, 422],
        response
    )
    assert response.status_code in [200, 400, 404, 422]


@allure.title("TC22 - SQL Injection attempt")
def test_sql_injection_attempt():
    response = fetch_logs("' OR 1=1 --")
    attach_api_details_to_allure(
        "SQL Injection attempt in query parameter",
        [400, 403, 422],
        response
    )
    assert response.status_code in [400, 403, 422]

@allure.title("TC23 - API stability under parallel requests")
@allure.severity(allure.severity_level.CRITICAL)
def test_api_stability_parallel_requests():
    total_requests = 500
    max_workers = 50   

    failures = []
    success_count = 0
    response_times = []

    def send_request(index):
        start = time.time()
        response = fetch_logs(VALID_CUSTOMER_ID)
        elapsed = round(time.time() - start, 3)
        return {
            "iteration": index + 1,
            "status_code": response.status_code,
            "url": response.url,
            "response_time": elapsed
        }

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [
            executor.submit(send_request, i)
            for i in range(total_requests)
        ]

        for future in as_completed(futures):
            result = future.result()
            response_times.append(result["response_time"])

            if result["status_code"] >= 500:
                failures.append(result)
            else:
                success_count += 1

    # ======================
    # ALLURE ATTACHMENTS
    # ======================
    allure.attach(
        f"""
        Total Requests Sent: {total_requests}
        Parallel Workers: {max_workers}
        Successful Responses: {success_count}
        Failed Responses (5xx): {len(failures)}
        Average Response Time: {round(sum(response_times) / len(response_times), 3)} sec
        Max Response Time: {max(response_times)} sec
        Min Response Time: {min(response_times)} sec
        """,
        name="Parallel Request Summary",
        attachment_type=allure.attachment_type.TEXT
    )

    if failures:
        allure.attach(
            json.dumps(failures, indent=2),
            name="Failure Details (5xx)",
            attachment_type=allure.attachment_type.JSON
        )

    
    assert len(failures) == 0, "API returned 5xx errors under parallel load"
