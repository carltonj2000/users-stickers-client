$(() => {
  $("form").submit(event => {
    event.preventDefault();
    const user = getUserFromForm();
    signup(user)
      .then(result => {
        console.log(result);
        $errorMessage.hide();
        window.location = `/user.html?id=${result.id}`;
      })
      .catch(showErrorMessage);
  });
});

function signup(user) {
  return $.post(`${AUTH_URL}/signup`, user);
}
