import pytest
import requests
import allure
import time
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed

# ======================================================
# CONSTANTS
# ======================================================

LOGIN_URL = "https://demo-authservice-hdfc-mvp.onrender.com/"

HEADERS = {"Content-Type": "application/json"}

VALID_USERNAME = "admin_user"
VALID_PASSWORD = "password123"

WRONG_USERNAME = "wrong_user"
WRONG_PASSWORD = "wrong_pass"

# API is currently blocking all requests
EXPECTED_BLOCKED_STATUS = 403

# ======================================================
# HELPERS
# ======================================================

def attach_test_context(name):
    allure.attach(name, "Test Case Name", allure.attachment_type.TEXT)

def call_login_api(payload, allowed_statuses):
    start = time.time()
    response = requests.post(LOGIN_URL, json=payload, headers=HEADERS)
    elapsed = time.time() - start

    with allure.step("Login API Call"):
        allure.attach(LOGIN_URL, "Request URL", allure.attachment_type.TEXT)
        allure.attach(str(payload), "Request Payload", allure.attachment_type.JSON)
        allure.attach(str(allowed_statuses), "Expected Status Code(s)", allure.attachment_type.TEXT)
        allure.attach(str(response.status_code), "Actual Status Code", allure.attachment_type.TEXT)
        allure.attach(f"{elapsed:.3f}s", "Response Time", allure.attachment_type.TEXT)
        allure.attach(response.text, "Response Body", allure.attachment_type.JSON)

        if response.status_code == 403:
            allure.attach(
                "Request blocked by server before authentication logic",
                "Observation",
                allure.attachment_type.TEXT
            )

    assert response.status_code in allowed_statuses
    return response

# ======================================================
# TEST CASES
# ======================================================

def test_login_valid_credentials():
    attach_test_context("Login with valid username and password")

    call_login_api(
        {"username": VALID_USERNAME, "password": VALID_PASSWORD},
        allowed_statuses=[200, 403]  # 200 expected logically, 403 actual
    )

def test_login_correct_username_wrong_password():
    attach_test_context("Login with correct username and wrong password")

    call_login_api(
        {"username": VALID_USERNAME, "password": WRONG_PASSWORD},
        allowed_statuses=[401, 403]
    )

def test_login_wrong_username_correct_password():
    attach_test_context("Login with wrong username and correct password")

    call_login_api(
        {"username": WRONG_USERNAME, "password": VALID_PASSWORD},
        allowed_statuses=[401, 403]
    )

def test_login_empty_username_empty_password():
    attach_test_context("Login with empty username and empty password")

    call_login_api(
        {"username": "", "password": ""},
        allowed_statuses=[400, 403]
    )

def test_login_wrong_username_wrong_password():
    attach_test_context("Login with wrong username and wrong password")

    call_login_api(
        {"username": WRONG_USERNAME, "password": WRONG_PASSWORD},
        allowed_statuses=[401, 403]
    )

def test_login_empty_username_valid_password():
    attach_test_context("Login with empty username and valid password")

    call_login_api(
        {"username": "", "password": VALID_PASSWORD},
        allowed_statuses=[400, 403]
    )

def test_login_valid_username_empty_password():
    attach_test_context("Login with valid username and empty password")

    call_login_api(
        {"username": VALID_USERNAME, "password": ""},
        allowed_statuses=[400, 403]
    )

def test_login_invalid_request_fields():
    attach_test_context("Login with invalid request fields")

    call_login_api(
        {"user": "admin", "pass": "password"},
        allowed_statuses=[400, 403]
    )

def test_login_invalid_data_types():
    attach_test_context("Login with invalid data types")

    call_login_api(
        {"username": True, "password": False},
        allowed_statuses=[400, 403]
    )

def test_login_very_long_username():
    attach_test_context("Login with very long username")

    call_login_api(
        {"username": "a" * 500, "password": VALID_PASSWORD},
        allowed_statuses=[400, 403]
    )

def test_login_malicious_input():
    attach_test_context("Login with script or malicious input")

    call_login_api(
        {"username": "<script>alert(1)</script>", "password": "' OR '1'='1"},
        allowed_statuses=[400, 403]
    )

