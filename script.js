// choose a random number from 0 to num - 1
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// arrays with sentence parts
const subjects = [{ BR: 'O cachorro', EN: 'The dog' }, { BR: 'A tartaruga', EN: 'The turtle' }, { BR: 'O coelho', EN: 'O coelho' }, { BR: 'O elefante', EN: 'The elephant' }, { BR: 'A girafa', EN: 'The giraffe' }, { BR: 'O leão', EN: 'The lion' }, { BR: 'A arara', EN: 'The macaw' },];
// const subjects = ['O cachorro', 'A tartaruga', 'O coelho', 'O elefante', 'A girafa', 'O leão', 'A arara'];
const actions = [{ BR: 'correu', EN: 'ran' }, { BR: 'pulou', EN: 'jumped' }, { BR: 'dormiu', EN: 'slept' }, { BR: 'comeu', EN: 'ate' }, { BR: 'cantou', EN: 'sang' }]
// const actions = ['correu', 'pulou', 'dormiu', 'comeu', 'cantou'];
const hows = [{ BR: 'rapidamente', EN: 'quickly' }, { BR: 'devagar', EN: 'slowly' }, { BR: 'com fome', EN: 'hungry' }, { BR: 'alegremente', EN: 'happily' }, { BR: 'tristemente', EN: 'sadly' }]
// const hows = ['rapidamente', 'devagar', 'com fome', 'alegremente', 'tristemente'];

// function to generate a random sentence with a choice of language
function generateRandomSentence(choice) {
  if (!choice) {
    return 'You need to make a language choice EN or BR.\n' + 'Você precisa escolher um idioma EN ou BR.'
  }
  choice = choice.toUpperCase();
  if (choice !== 'BR' && choice !== 'EN') {
    console.log('This script supports only BR or EN choices for languages, pass one please.');
    console.log('Este script suporta apenas opções BR ou EN para idiomas, passe um por favor.');
  }

  const subjectIndex = getRandomNumber(subjects.length);
  const actionIndex = getRandomNumber(actions.length);
  const howIndex = getRandomNumber(hows.length);

  const subject = subjects[subjectIndex][choice];
  const action = actions[actionIndex][choice];
  const how = hows[howIndex][choice];

  const sentence = `${subject} ${action} ${how}.`;

  return sentence;
}

// example purpose calls
console.log(generateRandomSentence());
console.log(generateRandomSentence('br'));
console.log(generateRandomSentence('BR'));
console.log(generateRandomSentence('bR'));
console.log(generateRandomSentence('en'));
console.log(generateRandomSentence('EN'));
console.log(generateRandomSentence('En'));
