const settings = {
  theme: 'dark',
  fontSize: 14,
};

// добавляем на local storage
// localStorage.setItem('settings', JSON.stringify(settings));

// получаем значение
// const savedSettings = localStorage.getItem('settings');

// парсим json формат в привычный обьект
// const parsedSettings = JSON.parse(savedSetings);
// console.log(parsedSettings.theme);

// Удаляем обьект настроек
// localStorage.removeItem('settings');

/**
 * Если мы пытаемся достучаться до несуществующего свойства
 * то получим null
 */

// Работаем с формой

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

populateMessage();

refs.form.addEventListener('submit', handleFormSubmit);
refs.textarea.addEventListener('input', handleTextareaInput);

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('Отправляем отзыв на бекенд');
  localStorage.removeItem('feedback-message');
  event.currentTarget.reset();
}

function handleTextareaInput(event) {
  console.log(event.currentTarget.value);
  localStorage.setItem('feedback-message', event.currentTarget.value);
}

function populateMessage() {
  const savedMessage = localStorage.getItem('feedback-message');
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
