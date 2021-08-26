import '../css/common.css';
import '../css/feedback-form.css';

const MESSAGE_KEY = 'feedbackMessage';
const FORM_DATA = 'user_data';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('input[name="name"]'),
};

// populateTextarea();
populateForm();

refs.textarea.addEventListener('input', onTextareaInput);
refs.form.addEventListener('submit', onFormSubmit);

const formData = {};

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
  // console.log(formData);
});

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(event) {
  event.preventDefault();

  console.log('Відправляю дані з форми!!!');

  localStorage.removeItem(MESSAGE_KEY);
  localStorage.removeItem(FORM_DATA);
  event.currentTarget.reset();
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(event) {
  const message = event.target.value;

  localStorage.setItem(MESSAGE_KEY, message);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(MESSAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

function populateForm() {
  const savedFormData = JSON.parse(localStorage.getItem(FORM_DATA));

  console.log(savedFormData);

  if (!savedFormData) return;

  if (savedFormData.name) {
    refs.input.value = savedFormData.name;
  }

  if (savedFormData.message) {
    refs.textarea.value = savedFormData.message;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });

countries.map(
  country =>
    `<div>
<h2>${country.name}</h2>
<p>${country.language}</p>
</div>`,
);

<p>{{name}}</p>
