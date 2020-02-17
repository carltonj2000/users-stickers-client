$(() => {
  $("form").submit(event => {
    event.preventDefault();
    const user = getUserFromForm();
    login(user)
      .then(result => {
        console.log(result);
        $errorMessage.hide();
        window.location = `/user.html?id=${result.id}`;
      })
      .catch(showErrorMessage);
  });
});

function login(user) {
  return $.post(`${AUTH_URL}/login`, user);
}
