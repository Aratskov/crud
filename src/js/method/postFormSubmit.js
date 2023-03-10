import postBook from '../api/requst/postBook';
import { headers } from '../api/const';

function postBookForm(event) {
  event.preventDefault();
  const objValue = {};

  const formData = new FormData(event.currentTarget);
  
  for (let [key, value] of formData){
    if(!value){
    alert(`Not: ${key}`)
      return
  }
  
    objValue[key] = value;
  }
 
  postBook(headers('POST', objValue));
  event.currentTarget.reset();
}

export default postBookForm;
