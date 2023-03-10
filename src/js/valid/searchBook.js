import fetchBook from "../api/requst/getBook";

function searchValidBook(nameBook){
return fetchBook().then(data => data.find(({name}) => name.toLowerCase() === nameBook.toLowerCase())
)
}

export default searchValidBook;