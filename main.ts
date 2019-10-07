// Init string with Janos Vitez
const JANOS_VITEZ = `"No, hogy még szebb legyen," felelt a kapitány,"  Lássunk, embereim, az áldomás után;  Papok pincéjéből van jó borunk elég,  Nézzük meg a kancsók mélységes fenekét!"`;
// Format that sh*t
const FORMATTED_JANOS_VITEZ = JANOS_VITEZ.replace(new RegExp('\\s{2}', 'g'), '\n');

const isEven = (num: number): boolean => num % 2 === 0;
const isEvenAndBetween = (num: number, down: number, up: number): boolean => num < up && num > down && isEven(num);
const getEvenOrOddText = (isEven: boolean): string => (isEven ? 'The number is even' : 'The number is odd');

export const createJanosVitez = ({
  getRandomNumberBetweenZeroAndTen,
  log,
}: {
  getRandomNumberBetweenZeroAndTen: () => number;
  log: (message?: any, ...optionalParams: any[]) => void;
}) => () => {
  // Introduction
  log('Hello there, I am your homework, make me better ;) \n');
  log(FORMATTED_JANOS_VITEZ);
  log('\n');

  // Number based Janos Vitez you got m8
  const num = getRandomNumberBetweenZeroAndTen();

  const numIsEven = isEven(num);
  const evenOrOddText = getEvenOrOddText(numIsEven);
  log(evenOrOddText, num);

  // Don't know why even numbers between 1 and 8 but it was told to do it like this
  if (isEvenAndBetween(num, 1, 8)) {
    log('You are lucky, here is Janos Vitez one more time, nicely.');
    log(FORMATTED_JANOS_VITEZ);
  }

  // Viszlat
  log('\nGoodbye');
};

export const janosVitez = createJanosVitez({
  getRandomNumberBetweenZeroAndTen: () => Math.floor(Math.random() * 10),
  log: console.log,
});

const main = () => {
  janosVitez();
};

main();
