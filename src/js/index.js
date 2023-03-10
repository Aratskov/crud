import ref from "./refs";
import showModalWindow from "./modal/showModal";
import renderBooks from "./renderBook";
import postBookForm from "./method/postFormSubmit";
import updateBook from "./method/updateBookForm";
import removeBook from "./method/deleteBook";


renderBooks();

const{ btnControl, form, bookEl } = ref;
const [add, update] = form

btnControl.addEventListener('click', showModalWindow)
add.addEventListener('submit', postBookForm)
update.addEventListener('submit', updateBook)
bookEl.addEventListener('click', removeBook)