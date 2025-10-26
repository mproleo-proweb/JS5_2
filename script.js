let count = +prompt("Nechta misol ishlamoqchisiz?");

let signs = ['+', '-', '*', '/'];

function RandomNum() {
    return Math.round(Math.random() * 10);
}

for (let i = 1; i <= count; i++) {
    let num1 = RandomNum();
    let num2 = RandomNum();

    let sign = signs[Math.floor(Math.random() * signs.length)];

    if (sign === '/' && num2 === 0) {
        num2 = 1;
    }

    let correct;
    if (sign === '+') correct = num1 + num2;
    else if (sign === '-') correct = num1 - num2;
    else if (sign === '*') correct = num1 * num2;
    else correct = num1 / num2;

    let userAnswer = +prompt(`${num1} ${sign} ${num2} = ?`);

    if (userAnswer === correct) {
        console.log(`Sizning javob to'g'ri: ${correct}`);
    } else {
        console.log(`Sizning javob noto'g'ri: ${userAnswer}. To'g'ri javob: ${correct}`);
    }
}
