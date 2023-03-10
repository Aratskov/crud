import { headers } from "../api/const";
import deleteBookContainer from "../api/requst/washBook";

function removeBook(event){
 if(!event.target.classList.contains('delete')) return

 const idEl = event.target.parentElement.dataset.id
 
 deleteBookContainer(idEl,headers("DELETE"))

}

export default removeBook;