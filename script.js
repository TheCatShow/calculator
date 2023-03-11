// Функция eval - выполняет строку кода.

let btn = document.querySelector('button');
let input = document.querySelector('#input');
let key = document.querySelector('key');
let reset = document.querySelector('#reset');
let result = document.querySelector('#result');
let calc = document.querySelector('#calc');

// Обработка кнопок

// Объявить переменную в которую будем передавать выражение из инпута и присвоить ей значение ""

// Перебрать через цикл for of все кнопки, навешивая на каждую из них обработчик клика:
// В функции обработчике к значению в перменной exp прибавить текстовое содержимое кнопки на которую кликнули
// В поле инпут передать переменную exp

// ОБРАБОТКА ЗНАКА =
// Навесить обработчик события кликов на кнопку "="
// В функции обработчик используя функцию eval выполнить строку кода которая содержится в переменной exp
// Вывести результат в инпут
// В переменную exp записать значение ""

// Аналогично выполнить обработку кнопки "C"

$(document).ready(function ($) {
    $("#1").click(function () {
        document.getElementById("calc__display").value += '1';
    });
    $("#2").click(function () {
        document.getElementById("calc__display").value += '2';
    });
    $("#3").click(function () {
        document.getElementById("calc__display").value += '3';
    });
    $("#4").click(function () {
        document.getElementById("calc__display").value += '4';
    });
    $("#5").click(function () {
        document.getElementById("calc__display").value += '5';
    });
    $("#6").click(function () {
        document.getElementById("calc__display").value += '6';
    });
    $("#7").click(function () {
        document.getElementById("calc__display").value += '7';
    });
    $("#8").click(function () {
        document.getElementById("calc__display").value += '8';
    });
    $("#9").click(function () {
        document.getElementById("calc__display").value += '9';
    });
    $("#0").click(function () {
        document.getElementById("calc__display").value += '0';
    });
    $("#dot").click(function () {
        document.getElementById("calc__display").value += '.';
    });
    $("#plus").click(function () {
        document.getElementById("calc__display").value += ' + ';
    });
    $("#minus").click(function () {
        document.getElementById("calc__display").value += ' - ';
    });
    $("#multiply").click(function () {
        document.getElementById("calc__display").value += ' * ';
    });
    $("#divide").click(function () {
        document.getElementById("calc__display").value += ' / ';
    });
    $("#result").click(function () {
        document.getElementById("calc__display").value = eval(document.getElementById("calc__display").value);
    });
    $("#reset").click(function () {
        document.getElementById("calc__display").value = '';
    });
});