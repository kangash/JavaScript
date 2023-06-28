// Задачи низкой сложности

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
function checkRole(role) {
  let result =
    role == 1
      ? "admin"
      : role == 2
      ? "moderator"
      : role == 3
      ? "user"
      : "role is undefined";
  console.log(result);
}

/* 4. Переменная item содержит название свойства для поиска, data содержит объект.
Напишите код, который проверяет, существует ли свойство item в объекте data и записывает логический результат true или false в переменную result. */
function checkProperty(item, data) {
  let result = item in data;
  console.log(result);
}

/* 5. Есть переменная n, которая содержит входные пользовательские данные, n - натуральное число.
Напишите код, который определяет, будет ли это число: нечётным, кратным 7. Логический результат записать в переменную result. */
function checkNumber(n) {
  let result = n % 2 != 0 && n % 7 == 0;
  console.log(result);
}

// Задачи средней сложности

// Задачи высокой сложности
