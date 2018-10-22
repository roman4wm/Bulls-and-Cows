"use strict";

let userCode = document.getElementById('userCode');
let userCodeButton = document.getElementById('userCodeButton');

// Message
let notEmpty = 'Введите четыре числа без пробелов.';
let onlyFour = 'Введите только четыре числа, которые не повторялись.';

// Проверить, не повторяються ли числа
let notRepeatingNumbers = function (num) {
    if (num.length != 4) {
        alert(onlyFour);
    }
    let n = 0;
    for (let i = 0; i < 4; i++) {
        delete num[i];
        if (num.includes(num[i])){
            console.log(num);
        }
        console.log('ok');
    }
};

userCodeButton.onclick = function() {

    let userCodeSet = userCode.value.trim();

    if (!userCodeSet || isNaN(userCodeSet)) {
        alert(notEmpty);
    }

    notRepeatingNumbers(userCodeSet);

    // userCode.value += ' ->в onclick ';
    //
    // userCode.focus(); // вызов инициирует событие onfocus
    //
    // userCode.value += ' из onclick-> ';
};

// userCode.onfocus = function() {
//     userCode.value += ' !focus! ';
// };
