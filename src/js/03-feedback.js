import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('.js-email'),
  message: document.querySelector('.js-message'),
  form: document.querySelector('.feedback-form'),
};

const data = 'feedback-content';
let feedbackData = JSON.parse(localStorage.getItem(data)) || {};

const restoreData = () => {
  refs.email.value = feedbackData.email || '';
  refs.message.value = feedbackData.message || '';
};

restoreData();

const updateData = event => {
  feedbackData[event.target.name] = event.target.value;
  localStorage.setItem(data, JSON.stringify(feedbackData));
};

const onSubmit = event => {
  event.preventDefault();

  console.log(feedbackData);

  localStorage.removeItem(data);
  event.currentTarget.reset();
  feedbackData = {};
};

refs.form.addEventListener('input', throttle(updateData, 500));
refs.form.addEventListener('submit', onSubmit);
