import requests
import pytest
import allure
import time

LOGIN_URL = "http://45.126.125.153:8082/bff/login"
LOGOUT_URL = "http://45.126.125.153:8082/bff/logout"

HEADERS = {
    "Content-Type": "application/json"
}

LOGIN_PAYLOAD = {
    "username": "baroon",
    "password": "password"
}


def login_and_get_token():

    response = requests.post(LOGIN_URL, json=LOGIN_PAYLOAD, headers=HEADERS)

    allure.attach(response.text, "Login Response", allure.attachment_type.JSON)

    assert response.status_code == 200

    data = response.json()

    token = data["responseData"]["accessToken"]

    allure.attach(token, "Extracted Token", allure.attachment_type.TEXT)

    return token


def logout_request(token):

    headers = {
    "Authorization": f"Bearer {token}"
}

    response = requests.post(LOGOUT_URL, headers=headers)

    allure.attach(str(headers), "Logout Headers", allure.attachment_type.TEXT)
    allure.attach(response.text, "Logout Response", allure.attachment_type.JSON)

    return response


@allure.feature("Logout API")
@allure.title("TC1: Valid Logout")
def test_valid_logout():

    token = login_and_get_token()

    response = logout_request(token)

    print(response.status_code, response.text)

    assert response.status_code in [200, 204]


@allure.feature("Logout API")
@allure.title("TC2: Logout with Used Token")
def test_logout_with_used_token():

    token = login_and_get_token()

    logout_request(token)

    response = logout_request(token)

    print(response.status_code, response.text)

    assert response.status_code in [401, 400, 403]


@allure.feature("Logout API")
@allure.title("TC3: Logout Without Token")
def test_logout_without_token():

    response = requests.post(LOGOUT_URL)

    allure.attach(response.text, "Response", allure.attachment_type.JSON)

    assert response.status_code in [401,403]


@allure.feature("Logout API")
@allure.title("TC4: Logout Invalid Token")
def test_logout_invalid_token():

    headers = {
        "Authorization": "Bearer invalidtoken123"
    }

    response = requests.post(LOGOUT_URL, headers=headers)

    allure.attach(response.text, "Invalid Token Response", allure.attachment_type.JSON)

    assert response.status_code in [401, 403]


@allure.feature("Logout API")
@allure.title("TC5: Token Unusable After Logout")
def test_token_invalid_after_logout():

    token = login_and_get_token()

    logout_request(token)

    headers = {
        "Authorization": f"Bearer {token}"
    }

    response = requests.post(LOGOUT_URL, headers=headers)

    allure.attach(response.text, "Reuse Token Response", allure.attachment_type.JSON)

    assert response.status_code in [401, 403]


@allure.feature("Logout API")
@allure.title("TC6: Logout Response Time")
def test_logout_response_time():

    token = login_and_get_token()

    start = time.time()

    response = logout_request(token)

    end = time.time()

    response_time = end - start

    allure.attach(str(response_time), "Response Time", allure.attachment_type.TEXT)

    assert response_time < 3