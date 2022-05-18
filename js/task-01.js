
// Первый вариант 
// const body = document.body;
// const list = body.childNodes[3].children;
// console.log(`Number of categories: ${list.length}`);

// const firstListItem = list[0].firstElementChild;
// console.log(`Category: ${firstListItem.textContent}`);
// const firstListElCount = list[0].childNodes[3].children;
// console.log(`Elements: ${firstListElCount.length}`);

// const secondListItem = list[1].firstElementChild;
// console.log(`Category: ${secondListItem.textContent}`);
// const secondListElCount = list[1].childNodes[3].children;
// console.log(`Elements: ${secondListElCount.length}`);

// const thirdListItem = list[2].firstElementChild;
// console.log(`Category: ${thirdListItem.textContent}`);
// const thirdListElCount = list[2].childNodes[3].children;
// console.log(`Elements: ${thirdListElCount.length}`);



// Второй вариант
const categoriesEl = document.querySelector('ul').children;
console.log(`Number of categories: ${categoriesEl.length}`);

const firstItemEl = categoriesEl[0].firstElementChild;
console.log(`Category: ${firstItemEl.textContent}`);
const firstItemElCount = categoriesEl[0].childNodes[3].children;
console.log (`Elements: ${firstItemElCount.length}`)

const secondItemEl = categoriesEl[1].firstElementChild; 
console.log(`Category: ${secondItemEl.textContent}`);
const secondItemElCount = categoriesEl[1].childNodes[3].children;
console.log(`Elements: ${secondItemElCount.length}`);

const thirdItemEl = categoriesEl[2].firstElementChild;
console.log(`Category: ${thirdItemEl.textContent}`);
const thirdItemElCount = categoriesEl[2].childNodes[3].children;
console.log(`Elements: ${thirdItemElCount.length}`);