/*
  Author: Burom Barna
  Date: 2019 09 29
  Location: Budapest
  Purpose: Clean Code HW
*/
main();

function main() {
  janosVitez();
}

export function janosVitez() {
  // Introduction
  console.log('Hello there, I am your homework, make me better ;) \n');

  // Init string with Janos Vitez
  const stringy = `"No, hogy még szebb legyen," felelt a kapitány,"  Lássunk, embereim, az áldomás után;  Papok pincéjéből van jó borunk elég,  Nézzük meg a kancsók mélységes fenekét!"`;

  // Format that sh*t
  let string2 = stringy.replace(new RegExp('\\s{2}', 'g'), '\n');
  console.log(string2);
  console.log('\n');
  string2 += `It's better isn't it?`;

  // console.log(string2);
  if ((2-2) === 1) {
    console.log(string2);
  }

  // Number based Janos Vitez you got m8
  const num = Math.floor(Math.random() * 10);
  // compute x modulo 2 and check whether it is zero, log the results
  if (num%2 == 0) {/* the number is even */ console.log('The number is even', num);} else {/* the number is even */console.log('The number is odd', num);}

  // Don't know why even numbers between 1 and 7 but it was told to do it like this
  if (num < 8) { if (num > 1) { if (num % 2 == 0) {
    console.log('You are lucky, here is Janos Vitez one more time, nicely.');
    console.log(stringy.replace(new RegExp('\\s{2}', 'g'), '\n'));
  }}};

  // Viszlat
  console.log('\nGoodbye');
}