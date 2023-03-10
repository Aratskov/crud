import postBook from '../api/requst/postBook';
import { headers } from '../api/const';

function postBookForm(event) {
  event.preventDefault();
  const objValue = {};

  const formData = new FormData(event.currentTarget);

  for (let [key, value] of formData) {
    if (!value) {
      alert(`Not: ${key}`);
      return;
    }
    objValue[key] = value;
  }
   
  if (/^(10|[1-9])$/.test(objValue.rating)) {
    postBook(headers('POST', objValue));
    event.currentTarget.reset();
  }else{
    alert("Wrong rating! Enter from 1 to 10")
  }
    
  

}

export default postBookForm;
