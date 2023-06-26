/* 1. Напишите код, который определяет является ли число четным или нечетным. */
function checkNumber(num) {
  let result;
  num % 2 == 0 ? (result = "четное") : (result = "нечетное");
  console.log(result);
}
