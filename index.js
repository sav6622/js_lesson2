let phrases = [
  "Пойдем гулять в парк?",
  "Кажется, дождь собирается. Лучше пойдем в кино!",
  "Давай, сегодня как раз вышел новый фильм.",
  "Встречаемся через час у кинотеатра.",
  "Давай лучше в подземном переходе, мало ли дождь!",
  "Возьми зонт, пожалуйста!",
  "Да, конечно!"
];

const FRIEND_SAY = "Друг";
const I_SAY = "Я";

let who_say = I_SAY;

for (let i=0; i<phrases.length; i++)
  {
    if ((i % 2) == 1)
      who_say = FRIEND_SAY;
    else
      who_say = I_SAY;
    console.log(`${who_say}: ${phrases[i]}`);
  }

const STRING_TO_FIND = "кино";

console.log(`\n\nИщем строку "${STRING_TO_FIND}"`);

for (phrase of phrases)
  {
    if (phrase.includes(STRING_TO_FIND))
      console.log(`${phrase}`);
  }



