import { BASE_URL } from "../const";

function refurbishBook(id,handler){
    return fetch(`${BASE_URL}/${id}`,handler).then(response => {
    if(!response.ok){
    throw new Error(response.Error)
    }
    return response.json()
    })
}

export default refurbishBook;