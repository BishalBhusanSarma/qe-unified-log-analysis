import pytest
import requests
import allure
import time
from datetime import datetime, timezone
from concurrent.futures import ThreadPoolExecutor

BASE_URL = "https://demo-customer-journey-service.onrender.com/api/v1"
GET_STAGE_LIST = f"{BASE_URL}/get-stage-list"

ALLOWED_STATUS = {"SUCCESS", "FAILED", "IN_PROGRESS"}
SLA_SECONDS = 5


@pytest.fixture
def headers():
    return {"Content-Type": "application/json"}


def attach_allure(request_url, payload, expected_result, response):
    allure.attach(request_url, name="Request URL", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(payload), name="Request Body", attachment_type=allure.attachment_type.JSON)
    allure.attach(expected_result, name="Expected Result", attachment_type=allure.attachment_type.TEXT)
    allure.attach(str(response.status_code), name="Actual Status Code", attachment_type=allure.attachment_type.TEXT)
    allure.attach(response.text, name="Response Body", attachment_type=allure.attachment_type.JSON)


def validate_timestamp(ts):
    try:
        parsed = datetime.fromisoformat(ts.replace("Z", "+00:00"))
        return parsed
    except Exception:
        return None


@allure.feature("Stage List API")
class TestGetStageList:

    @allure.title("Test Case 1: Valid Journey ID")
    def test_valid_journey_id(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "200 OK, success=true, responseData & stages present"

        start = time.time()
        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)
        elapsed = time.time() - start

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        data = response.json()

        assert response.status_code == 200
        assert data["success"] is True
        assert "responseData" in data
        assert isinstance(data["responseData"]["stages"], list)
        assert elapsed <= SLA_SECONDS


    @allure.title("Test Case 2: Invalid Journey ID")
    def test_invalid_journey_id(self, headers):
        payload = {"journeyId": "JRN-9999"}
        expected_result = "Graceful handling, error OR empty stages"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        assert response.status_code in [200, 400, 404]


    @allure.title("Test Case 3: Missing Journey ID")
    def test_missing_journey_id(self, headers):
        payload = {}
        expected_result = "400 / 404 validation error"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        assert response.status_code in [400, 404]


    @allure.title("Test Case 4: Null Journey ID")
    def test_null_journey_id(self, headers):
        payload = {"journeyId": None}
        expected_result = "400 validation error"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        assert response.status_code == 400


    @allure.title("Test Case 5: Stage List Structure Validation")
    def test_stage_structure(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "responseData.pageCount & array stages"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        data = response.json()
        rd = data["responseData"]

        assert "pageCount" in rd
        assert isinstance(rd["stages"], list)


    @allure.title("Test Case 6: Stage Field Validation")
    def test_stage_field_validation(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "Mandatory fields validated"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        stages = response.json()["responseData"]["stages"]

        for stage in stages:
            assert stage["transactionId"]
            assert stage["event"]
            assert stage["status"] in ALLOWED_STATUS
            assert isinstance(stage["retryCount"], int)
            assert stage["retryCount"] >= 0
            assert stage["source"]


    @allure.title("Test Case 7: Timestamp Validation")
    def test_timestamp_validation(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "Timestamp is valid ISO-8601 format"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        stages = response.json()["responseData"]["stages"]

        for stage in stages:
            parsed = validate_timestamp(stage["timestamp"])

            assert parsed is not None, f"Invalid timestamp: {stage['timestamp']}"



    @allure.title("Test Case 8: Status Value Validation")
    def test_status_validation(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "Status within allowed enum"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        stages = response.json()["responseData"]["stages"]

        for stage in stages:
            assert stage["status"] in ALLOWED_STATUS


    @allure.title("Test Case 9: Error Fields Validation (FAILED Stage)")
    def test_failed_stage_fields(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "FAILED stages contain reason & errorCode"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        stages = response.json()["responseData"]["stages"]

        for stage in stages:
            if stage["status"] == "FAILED":
                assert stage.get("reason")
                assert stage.get("errorCode")


    @allure.title("Test Case 10: Response Time Validation")
    def test_response_time(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = f"Response ≤ {SLA_SECONDS}s"

        start = time.time()
        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)
        elapsed = time.time() - start

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)
        allure.attach(f"{elapsed:.2f}s", name="Measured Response Time", attachment_type=allure.attachment_type.TEXT)

        assert elapsed <= SLA_SECONDS


    @allure.title("Test Case 11: Large Stage List Handling")
    def test_large_stage_list(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "Stages list intact, pagination valid"

        response = requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        data = response.json()

        assert isinstance(data["responseData"]["stages"], list)
        assert data["responseData"]["pageCount"] >= 1


    @allure.title("Test Case 12: Parallel Requests")
    def test_parallel_requests(self, headers):
        payload = {"journeyId": "JRN-6011"}
        expected_result = "Concurrent calls stable (200 OK)"

        def call_api():
            return requests.post(GET_STAGE_LIST, json=payload, headers=headers)

        with ThreadPoolExecutor(max_workers=5) as executor:
            responses = list(executor.map(lambda _: call_api(), range(5)))

        for response in responses:
            attach_allure(GET_STAGE_LIST, payload, expected_result, response)

        assert all(r.status_code == 200 for r in responses)
