import pytest
import requests
import allure

BASE_URL = "https://log-fetch-alerts.onrender.com/api/alerts"


@allure.feature("Alerts API")
@allure.story("Validate Alerts API Response")
@allure.title("TC1: Validate Alerts API Response Structure and Fields")
def test_alerts_api():

    with allure.step("Send GET request to Alerts API"):
        response = requests.get(BASE_URL)

    with allure.step("Validate status code is 200"):
        assert response.status_code == 200

    with allure.step("Parse JSON response"):
        alerts = response.json()

    allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

    with allure.step("Validate response is a list"):
        assert isinstance(alerts, list), "Response is not a list"

    required_fields = [
        "id",
        "source",
        "errorPercentage",
        "status",
        "lastUpdated",
        "totalLogs",
        "failedLogs",
        "message",
        "escalationCount"
    ]

    with allure.step("Validate required fields and data types in each alert"):
        for alert in alerts:

            for field in required_fields:
                assert field in alert, f"{field} missing in alert response"

            assert isinstance(alert["id"], str)
            assert isinstance(alert["source"], str)
            assert isinstance(alert["errorPercentage"], (int, float))
            assert isinstance(alert["status"], str)
            assert isinstance(alert["lastUpdated"], str)
            assert isinstance(alert["totalLogs"], int)
            assert isinstance(alert["failedLogs"], int)
            assert isinstance(alert["message"], str)
            assert isinstance(alert["escalationCount"], int)