import ref from '../refs';

const { form } = ref;
const [add, update] = form;

function showModalWindow(event) {
  const choiseBtn = event.target.classList.value;
  switch (choiseBtn) {
    case 'add':
      add.classList.add('show');
      update.classList.remove('show');

      break;
    case 'update':
      add.classList.remove('show');
      update.classList.add('show');
      break;
    case 'hide':
      add.classList.remove('show');
      update.classList.remove('show');
      break;
  }
}

export default showModalWindow;
