const AUTH_URL = `${API_URL}/auth`;

$(() => {
  $("form").submit(event => {
    event.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    const user = { email, password };
    const $errorMessage = $("#errorMessage");
    login(user)
      .then(result => {
        console.log(result);
        $errorMessage.hide();
      })
      .catch(e => {
        console.log(e);
        $errorMessage.text(e.responseJSON.message);
        $errorMessage.show();
      });
  });
});

function login(user) {
  return $.post(`${AUTH_URL}/login`, user);
}
