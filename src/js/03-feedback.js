import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('.js-email'),
  message: document.querySelector('.js-message'),
  form: document.querySelector('.feedback-form'),
};

const DATA = 'feedback-content';
let feedbackData = JSON.parse(localStorage.getItem(DATA)) || {};

const restoreData = () => {
  refs.email.value = feedbackData.email || '';
  refs.message.value = feedbackData.message || '';
};

restoreData();

const updateData = event => {
  feedbackData[event.target.name] = event.target.value;
  localStorage.setItem(DATA, JSON.stringify(feedbackData));
};

const onSubmit = event => {
  event.preventDefault();

  console.log(feedbackData);

  localStorage.removeItem(DATA);
  event.currentTarget.reset();
  feedbackData = {};
};

refs.form.addEventListener('input', throttle(updateData, 500));
refs.form.addEventListener('submit', onSubmit);
