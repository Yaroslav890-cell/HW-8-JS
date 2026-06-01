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
