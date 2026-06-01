//через for
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  string += friends[i];

  if (i < friends.length - 1) {
    string += ',';
  }
}

console.log(string);





//через join

const friends2= ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string2 = friends2.join(',');
console.log(string2);







const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
const cardToRemove = 'Карточка-3';

const index = cards.indexOf(cardToRemove);

cards.splice(index, 1);

console.log(cards);

const cardToInsert = 'Карточка-6';

const index2 = cards.indexOf('Карточка-4');

cards.splice(index2, 0, cardToInsert);

console.log(cards);


const cardToUpdate = 'Карточка-4';

const index3 = cards.indexOf(cardToUpdate);

cards.splice(index3, 1, 'Оновлена Карточка-4');

console.log(cards);