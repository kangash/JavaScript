/* 1. Напишите код, который определяет является ли число четным или нечетным. */
function checkParity(num) {
  let result = num % 2 == 0 ? 'четное' : 'нечетное';
  console.log(result);
}

/* 2. Напишите код, который сравнивает два числа. */
function compareNumbers(x, y) {
  let result = x > y ? 'x больше y' : x < y ? 'y больше x' : 'x равно y';
  console.log(result);
}

/* 3. Напишите код, который в зависимости от значения переменной role записывает соответствующий результат в переменную result. 1 — admin, 2 — moderator, 3 — user */
function checkRole(role) {
  let result =
    role == 1
      ? 'admin'
      : role == 2
      ? 'moderator'
      : role == 3
      ? 'user'
      : 'role is undefined';
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

/* 6. Есть переменная stars, которая содержит входные пользовательские данные. Значение переменной stars от 1 до 5. 1 — ★, 2 — ★★, 3 — ★★★, 4 — ★★★★, 5 — ★★★★★. 
Напишите код, который проверяет значение переменной stars и записывает результат в переменную result. */
function showStars(stars) {
  let result = stars >= 1 && stars <= 5 ? '★'.repeat(stars) : '';
  console.log(result);
}

/* 7. У вас есть переменная n, которая содержит входные пользовательские данные, n всегда содержит нечетное число. 
Напишите код, который возвращает сумму всех нечетных чисел до n (включительно) и записывает результат в переменную result. */
function sumOddNumbers(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 2) {
    result += i;
  }
  console.log(result);
}

/* 8. Есть переменная str, которая содержит входные пользовательские данные. Напишите код, который в зависимости от длины строки str записывает количество + в переменную result. */

function writeStrPlus(str) {
  let result = '+'.repeat(str.length);
  console.log(result);
}

/* 9. Есть переменная str, которая содержит входные пользовательские данные. Напишите код, который находит первый символ в переменной str и записывает результат в переменную result. */

function getFirstLetter(str) {
  let result = str[0];
  console.log(result);
}

/* 10. Есть переменная str, которая содержит входные пользовательские данные. Напишите код, который:
1. Проверяет длину строки в переменной str. 
2. Если длина строки больше 20 символов, тогда необходимо строку обрезать и дописать в конце ...
3. Общая длина строки вместе с ... не должна превышать 20 символов.
4. Результат записывает в переменную result. */

function getShortStr(str) {
  if (str.length > 20) {
    result = str.slice(0, 17) + '...';
  } else {
    result = str;
  }
  console.log(result);
}

/* 11. Есть переменная str, которая содержит входные пользовательские данные. Напишите код, который подсчитывает количество гласных и согласных букв в переменной str и записывает результат в переменную result. */

function calcLetters(str) {
  let vowels = 0;
  let consonants = 0;
  let arr = str.split('');
  let arrVowels = 'б,в,г,д,ж,з,й,к,л,м,н,п,р,с,т,ф,х,ц,ч,ш,щ'.split(',');
  let arrConsonants = 'а,у,о,ы,э,я,ю,ё,и,е'.split(',');
  for (let i = 0; i < arr.length; i++) {
    if (arrVowels.includes(arr[i])) vowels += 1;
    if (arrConsonants.includes(arr[i])) consonants += 1;
  }
  let result = `согласных: ${consonants}, гласных: ${vowels}`;
  console.log(result);
}
