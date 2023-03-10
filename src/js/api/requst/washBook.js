import { BASE_URL } from "../const";
import renderBooks from "../../renderBook";

function deleteBookContainer(id,headers){
    return fetch(`${BASE_URL}/${id}`,headers).then(renderBooks)
}

export default deleteBookContainer;