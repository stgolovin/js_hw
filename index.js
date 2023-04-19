alert("Угадай число, которое я загадал. От 0 до 999");
let numberOfAttempts = prompt("Сколько попыток тебе нужно?");
let n = Math.floor(Math.random() * 1000);
console.log("ПК загадал", n);
for (i=0; i<numberOfAttempts; i++) {    
    let numberFromUser = prompt('Try to guess number');
    console.log("Вы загадали",numberFromUser);
    if (isNaN(numberFromUser) || (numberFromUser === '') || (numberFromUser > 999) || (numberFromUser < 0)) {
        alert("Вы ввели недопустимое значение!"); 
    } else if (numberFromUser < n) {
            alert(`Загаданное число больше ${numberFromUser}. Попробуйте еще раз`);
        }
        else if (numberFromUser > n) {
            alert(`Загаданное число меньше ${numberFromUser}. Попробуйте еще раз`);
        }
        else {
            alert("Вы угадали! Поздравляю");
            break
        }
}