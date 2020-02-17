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

function redirectIfLoggedIn() {
  if (localStorage.user_id) {
    console.log(localStorage.user_id);
    window.location = `/user.html?id=${localStorage.user_id}`;
  }
}

function setIdRedirect(result) {
  if (!result.id) return;
  localStorage.user_id = result.id;
  $errorMessage.hide();
  window.location = `/user.html?id=${result.id}`;
}

function logout() {
  localStorage.removeItem("user_id");
  $.get(`${AUTH_URL}/logout`).then(result => console.log(result));
  window.location = `/login.html`;
}
