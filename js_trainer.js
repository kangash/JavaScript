/* 1. Напишите код, который определяет является ли число четным или нечетным. */
function checkNumber(num) {
  let result = num % 2 == 0 ? "четное" : "нечетное";
  console.log(result);
}

/* 2. Напишите код, который сравнивает два числа. */
function compareNumbers(x, y) {
  let result = x > y ? "x больше y" : x < y ? "y больше x" : "x равно y";
  console.log(result);
}
