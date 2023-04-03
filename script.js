// choose a random number from 0 to num - 1
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const subjects = ['O cachorro', 'A tartaruga', 'O coelho', 'O elefante', 'A girafa', 'O leão', 'A arara'];
const actions = ['correu', 'pulou', 'dormiu', 'comeu', 'cantou'];
const hows = ['rapidamente', 'devagar', 'com fome', 'alegremente', 'tristemente'];

function generateRandomSentence() {
    const subjectIndex = getRandomNumber(subjects.length);
    const actionIndex = getRandomNumber(actions.length);
    const howIndex = getRandomNumber(hows.length);

    const subject = subjects[subjectIndex];
    const action = actions[actionIndex];
    const how = hows[howIndex];

    const sentence = `${subject} ${action} ${how}.`;

    return sentence;
}

console.log(generateRandomSentence());
console.log(generateRandomSentence());
console.log(generateRandomSentence());
