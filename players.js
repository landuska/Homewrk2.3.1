const players = require("./data.json");

let score = [];
let gamerName = [];

// Создаем два массива: один - с именами игроков, другой - с очками

for (let i in players) {
  gamerName.push(players[i].name);
  score.push(players[i].scorepoint);
}

console.log(score, gamerName);

// Ищем максимальное количество баллов
// let maxScore = Math.max(...score);

// сортируем массив по возрастанию
function compareNumbers(a, b) {
  return a - b;
};

console.log(score.sort(compareNumbers));
let maxScore = score.pop()

// Выводим в консоль игрока, которому пренадлежит максимальное количество баллов

// for (let j in gamerName) {
//   if (score.indexOf(maxScore, 0) == j) {
//     console.log(`Максимальное количество очков: ${gamerName[j]} - ${maxScore}`);
//   };
// };

for (let j in players) {
  if (players[j].scorepoint == maxScore) {
    console.log(`Максимальное количество очков: ${gamerName[j]} - ${maxScore}`);
  };
}

