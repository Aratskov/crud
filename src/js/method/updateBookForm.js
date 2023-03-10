import fetchBook from "../api/requst/getBook";
import refurbishBook from "../api/requst/updateBook";
import { headers } from "../api/const";
import renderBooks from "../renderBook";
import searchValidBook from "../valid/searchBook";

function updateBook(event){
    event.preventDefault()
    // const inputName = event.currentTarget.elements.name.value;
    // const rating = event.currentTarget.elements.rating.value;
    // const describe = event.currentTarget.elements.describe.value

    const {name:{value: inputName},rating:{value: rating},describe:{value: describe}} = event.currentTarget.elements

    searchValidBook(inputName).then(book => {
     if(!book){
        alert('Book not found')
        return
    }
    if(/^(10|[1-9])$/.test(rating)){
        refurbishBook(book.id,headers("PATCH",{rating,describe})).then(renderBooks)
        event.target.reset()    
    }else{
    alert("Rating is incorrect (1-10)")
    }
    
})
}

export default updateBook;