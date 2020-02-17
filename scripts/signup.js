redirectIfLoggedIn();

$(() => {
  $("form").submit(event => {
    event.preventDefault();
    const user = getUserFromForm();
    signup(user)
      .then(setIdRedirect)
      .catch(showErrorMessage);
  });
});

function signup(user) {
  return $.post(`${AUTH_URL}/signup`, user);
}
