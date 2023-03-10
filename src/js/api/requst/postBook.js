import renderBooks from "../../renderBook";
import { BASE_URL } from "../const";

function postBook(handler){
    
return fetch(`${BASE_URL}`, handler).then(response => {
if(!response.ok){
throw new Error(response.Error)
}
return response.json()
}).then(renderBooks)

}

export default postBook;