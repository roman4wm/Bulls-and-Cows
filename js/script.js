"use strict";

let userCode = document.getElementById('userCode');
let userCodeButton = document.getElementById('userCodeButton');

// Message

let notEmpty = 'Ввудите четыре числа без пробелов.';

userCodeButton.onclick = function() {

    let userCodeSet = userCode.value.trim();

    if (!userCodeSet) {
        alert(notEmpty);
    }



    userCode.value += ' ->в onclick ';

    userCode.focus(); // вызов инициирует событие onfocus

    userCode.value += ' из onclick-> ';
};

userCode.onfocus = function() {
    userCode.value += ' !focus! ';
};
