/* 1. Напишите код, который определяет является ли число четным или нечетным. */
function checkParity(num) {
  let result = num % 2 == 0 ? "четное" : "нечетное";
  console.log(result);
}

/* 2. Напишите код, который сравнивает два числа. */
function compareNumbers(x, y) {
  let result = x > y ? "x больше y" : x < y ? "y больше x" : "x равно y";
  console.log(result);
}

/* 3. Напишите код, который в зависимости от значения переменной role записывает соответствующий результат в переменную result.
1 — admin, 2 — moderator, 3 — user */
