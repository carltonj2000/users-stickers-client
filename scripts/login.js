redirectIfLoggedIn();

$(() => {
  $("form").submit(event => {
    event.preventDefault();
    const user = getUserFromForm();
    login(user)
      .then(setIdRedirect)
      .catch(showErrorMessage);
  });
});

function login(user) {
  return $.post(`${AUTH_URL}/login`, user);
}
