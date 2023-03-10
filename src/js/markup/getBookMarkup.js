function markupBooks(books) {
  return books.map(({id, name, rating, describe}) =>{
  return `
<div class="books__item" data-id=${id}>
<div class="books__name"><span>name:</span>${name}</div>
<div class="books__rating"><span>rating:</span>${rating}</div>
<div class="books__describe">
${describe}
</div>
<button class="delete">delete</button>
</div>
`;
}).join('')
}

export default markupBooks;
