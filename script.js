const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
  }
  if (!checkPasswordsMatch()) {
    event.preventDefault();
    passwordConfirm.dispatchEvent(new Event('invalid'));
  }
});

username.addEventListener('invalid', (event) => {
  let msg = '';
  if (username.validity.valueMissing) {
    msg = 'Your username is required.';
  } else if (username.validity.tooShort) {
    msg = 'Your username must be at least 4 characters.';
  }
  username.setCustomValidity(msg);
  displayErrorMessage(username);
});

email.addEventListener('invalid', (event) => {
  let msg = '';
  if (email.validity.valueMissing) {
    msg = 'Your email is required.';
  } else if (email.validity.typeMismatch) {
    msg = 'Your email format is incorrect.';
  }
  email.setCustomValidity(msg);
  displayErrorMessage(email);
});

password.addEventListener('invalid', (event) => {
  let msg = '';
  if (password.validity.valueMissing) {
    msg = 'Your password is required.';
  } else if (password.validity.tooShort) {
    msg = 'Your password must be at least 8 characters.';
  }
  password.setCustomValidity(msg);
  displayErrorMessage(password);
});

passwordConfirm.addEventListener('invalid', (event) => {
  let msg = '';
  if (password.validity.valueMissing) {
    msg = 'Confirmation of your password is required.';
  } else if (!checkPasswordsMatch()) {
    msg = 'Your password does not match its confirmation.';
  }
  passwordConfirm.setCustomValidity(msg);
  displayErrorMessage(passwordConfirm);
});

country.addEventListener('invalid', (event) => {
  let msg = '';
  if (country.validity.valueMissing) {
    msg = 'Your country is required.';
  } else if (country.validity.tooShort) {
    msg = 'Your country name must be at least 4 characters.';
  }
  country.setCustomValidity(msg);
  displayErrorMessage(country);
});

zipcode.addEventListener('invalid', (event) => {
  let msg = '';
  if (zipcode.validity.valueMissing) {
    msg = 'Your Zip code is required.';
  } else if (zipcode.validity.tooShort) {
    msg = 'Your Zip code must be at least 5 characters.';
  } else if (zipcode.validity.tooLong) {
    msg = 'Your Zip code must not be longer than 10 characters.';
  }
  zipcode.setCustomValidity(msg);
  displayErrorMessage(zipcode);
});

function displayErrorMessage(elem) {
  const error = elem.nextElementSibling;
  error.textContent = elem.validationMessage;
  error.classList.add('active');
  elem.classList.add('invalid');
}

function checkPasswordsMatch() {
  if (passwordConfirm.value === password.value) {
    return true;
  }
}
