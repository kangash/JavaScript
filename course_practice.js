/* Задание 1. Напишите код, который будет присваивать переменной "х" удвоенное значение остатка от деления произведения переменных "a" и "b" на их сумму. */
function testOperation(a, b) {
    let x;
    x = ((a * b) % (a + b)) * 2;
    return x;
}

/*Задание 2. Напишите код, который будет присваивать переменной "х" значение суммы переменных "a" и "b" в случае если  a > b или их произведение в остальных случаях. */
function testIf(a, b) {
    let x;
    if (a > b) {
        x = a + b;
    } else {
        x = a * b;
    }
    return x;
}