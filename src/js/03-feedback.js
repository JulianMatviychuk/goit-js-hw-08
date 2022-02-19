import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

console.log(form);

form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);

const storageKey = 'feedback-form-state';

const formData = {};

function onFormInput(event) {
  formData.message = form.element.message.value;
  formData.email = form.element.email.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

