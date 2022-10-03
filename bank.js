document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "aminul@gmail.com" && password === "1234") {
    window.location.href = "bank.html";
  } else {
    alert(
      "invalid user !! please type Email: aminul@gmail.com , Password: 1234"
    );
  }
});
