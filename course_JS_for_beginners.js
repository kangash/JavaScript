/* Задание 1. Напишите код, который будет присваивать переменной "х" удвоенное значение остатка от деления произведения переменных "a" и "b" на их сумму. */
function testOperation(a, b) {
  let x;
  x = ((a * b) % (a + b)) * 2;
  return x;
}

/* Задание 2. Напишите код, который будет присваивать переменной "х" значение суммы переменных "a" и "b" - в случае если a < b, 
разность "a" и "b" - в случае если a > b, и их произведение в остальных случаях. */
function testIf(a, b) {
  let x;
  if (a < b) {
    x = a + b;
  } else if (a > b) {
    x = a - b;
  } else {
    x = a * b;
  }
  return x;
}

/* Задание 3. Напишите код, который будет вычислять факториал для натурального числа, передаваемого в функцию. */
function testFactorial(a) {
  let x = 1;
  for (i = 1; i <= a; i = i + 1) {
    x = x * i;
  }
  return x;
}

/* Задание 4. Напишите код, который будет вычислять сумму всех четных чисел, встречающихся в ряду от 1 до числа (включительно), передаваемого в функцию. */
function testWhile(a) {
  let x = 0;
  let i = 1;
  while (i <= a) {
    if (i % 2 == 0) {
      x += i;
    }
    i++;
  }
  return x;
}

/* Задание 5. Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом. */
function my_function(n) {
  if (n == 1) return n;
  return my_function(n - 1) + ` ${n}`;
}

/* Задание 6. В функцию testStr передаются две строки. Нужно вернуть из функции их суммарную длину. */
function testStr(a, b) {
  return a.length + b.length;
}

/* Задание 7. В функцию testStr первым параметром передается строка, а вторым - число. 
Нужно вернуть из функции символ строки, порядковый номер которого указан в переданном в функцию числе. */
function testStr(str, n) {
  return str.charAt(n - 1);
}

/* Задание 8. В функцию testStr передаются две строки. 
Нужно вернуть из функции строку, которая будет включать в себя обе этих строки, преобразовав в первой строке все буквы в заглавные, а во второй - в строчные. */
function testStr(a, b) {
  return a.toUpperCase() + b.toLowerCase();
}

/* Задание 9. В функцию testStr передаются две строки. Нужно вернуть индекс позиции, с которой начинается вхождение второй строки в первую. */
function testStr(a, b) {
  return a.indexOf(b);
}

/* Задание 10. В функцию testArray передаются два массива случайной длины заполненные случайными числами. 
Нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции. */
function testArray(a, b) {
  let arr = a.concat(b);
  let result = arr.reduce(function (sum, current) {
    return sum + current;
  });
  return result;
}

/* Задание 11. В функцию testArray передаются две строки случайной длины и содержания. Нужно составить из символов этих строк один массив (каждый символ строки 
  становится отдельным элементом массива), затем добавить первым элементом массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, 
  преобразовав в строку. */
function testArray(a, b) {
  let newString = a + b;
  let arr = newString.split("");
  arr.unshift("Иванов");
  arr.reverse();
  return arr.join("");
}

/* Задание 12. В функцию testDateTime передаются две строки вида "03 November 2017 04:17".
Нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник". */
function testDateTime(a, b) {
  let firstDate = new Date(a);
  let secondDate = new Date(b);
  let dayNumber;
  let dayName = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  if (+firstDate > +secondDate) {
    dayNumber = firstDate.getDay();
  } else if (+firstDate < +secondDate) {
    dayNumber = secondDate.getDay();
  } else {
    return "Даты равны";
  }
  return dayName[dayNumber];
}

/* Задание 13. Нужно вычислить и вернуть из функции площадь треугольника. Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах. */
function testMath(a, b, c) {
  return 0.5 * a * b * Math.sin((c * Math.PI) / 180);
}

/* Задание 14. В функцию передаются 4 числа. Необходимо вычислить результат деления большего из этих чисел на меньшее, и округлив до ближайшего меньшего целого вернуть из функции. */
function testMath(a, b, c, d) {
  return Math.floor(Math.max(a, b, c, d) / Math.min(a, b, c, d));
}

/* Задание 15. В функцию передаются два параметра: целочисленная переменная ("а") и некоторая функция ("func"). 
Необходимо запустить функцию "func", с переменной "а" в качестве аргумента. Но вот проблема - в функции, похоже, оказалась ошибка. Нужно возвратить имя (свойство "name") возникающей ошибки. */
function testErrorFunc(a, func) {
  try {
    func(a);
  } catch (err) {
    x = err.name;
  }
  return x;
}

/* Задание 16. В функцию testRegExp первым параметром передается случайная строка(переменная s), а вторым - случайная подстрока(переменная sub_s), 
которую нужно использовать в качестве шаблона регулярного выражения. Нужно вернуть из функции строку, в которой будут перечислены через запятую все совпадения шаблона с первой строкой. */
