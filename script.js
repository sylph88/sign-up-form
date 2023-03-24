const form = document.querySelector('form');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

function validatePassword() {
  if (password.value !== confirm_password.value) {
    errorMessage.textContent = "Passwords do not match";
    errorMessage.style.display = "block";
    return false;
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}

form.addEventListener('submit', function (event) {
  if (!validatePassword()) {
    event.preventDefault();
  }
});

confirm_password.addEventListener('blur', validatePassword);
