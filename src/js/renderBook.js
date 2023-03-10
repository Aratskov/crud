import fetchBook from './api/requst/getBook';
import markupBooks from './markup/getBookMarkup';
import ref from './refs';

function renderBooks() {
  fetchBook().then(books => {
    ref.bookEl.replaceChildren();
    //replaceChildren - заменяет только дочерние элементы элемента
    ref.bookEl.insertAdjacentHTML('beforeend', markupBooks(books));
  });
}

export default renderBooks;
