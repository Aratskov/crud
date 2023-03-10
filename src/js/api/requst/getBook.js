import { BASE_URL } from "../const";

async function fetchBook(){
    
const response = await fetch(`${BASE_URL}`)
if(!response.ok) throw new Error(response.Error)

return response.json()
}



export default fetchBook;