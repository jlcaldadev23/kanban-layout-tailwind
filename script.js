const addBtn = document.querySelector(`[data-id='add-button']`);
const inputForm = document.querySelector(`[data-id='input-form']`);
addBtn.addEventListener('click', (e) => {
  inputForm.classList.toggle('hidden');
});
