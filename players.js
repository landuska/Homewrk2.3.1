const players = require('./data.json');

let score = [];
let gamerName = [];

for (let i in players) {
    gamerName.push(players[i].name);
    score.push(players[i].scorepoint);
};

console.log(score, gamerName);

let maxScore = Math.max(...score);

for (let j in gamerName) {
   if (score.indexOf (maxScore, 0) == j) {
        console.log (`Максимальное количество очков: ${gamerName[j]} - ${maxScore}`)
        break;
     };
};
