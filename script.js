
const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    contents.forEach(content => {
      content.classList.add('hidden');
      if (content.id === button.dataset.tab) {
        content.classList.remove('hidden');
      }
    });
  });
});
