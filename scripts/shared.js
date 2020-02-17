const $errorMessage = $("#errorMessage");
const $email = $("#email");
const $password = $("#password");

$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

const API_URL = getHostURL();
const AUTH_URL = `${API_URL}/auth`;

function getHostURL() {
  if (window.location.host.indexOf("localhost") != -1) {
    return "http://localhost:3000";
  } else {
    return "https://sticker-mania.herokuapp.com";
  }
}

function getUserFromForm() {
  return { email: $email.val(), password: $password.val() };
}

function showErrorMessage(e) {
  console.log(e);
  $errorMessage.text(e.responseJSON.message);
  $errorMessage.show();
}
