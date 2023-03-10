import { BASE_URL } from "../const";

function fetchBook(){
    
return fetch(`${BASE_URL}`).then(response => {
if(!response.ok){
throw new Error(response.Error)
}
return response.json()
})

}

export default fetchBook;