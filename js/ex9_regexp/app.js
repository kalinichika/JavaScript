/*
i
С этим флагом поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).
g
С этим флагом поиск ищет все совпадения, без него – только первое.
m
Многострочный режим (рассматривается в главе Многострочный режим якорей ^ $, флаг "m").
s
Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
u
Включает полную поддержку юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
y
Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")

Если совпадений нет, то, вне зависимости от наличия флага g,возвращается null
*/
let str = "Калинка, калинка, малинка моя";

// П О И С К .... m a t c h
console.log("\n M A T C H \n");
console.log("str.match(/.../gi) =\t", str.match(/калинка/gi));
console.log("str.match(/.../i) =\t", str.match(/алинка/i), "\n");
let result = str.match(/алинка/i);
console.log("length=\t", result.length);
console.log("index=\t", result.index);
console.log("input=\t", result.input);

console.log("\n R E P L A C E \n");
// З А М Е Н А ... r e p l a c e
console.log("str =\t\t", (str = "Ха-ха-ха"));
console.log("replace/ха/gi:\t\t", str.replace(/ха/gi, "**"));
console.log("replace/ха/g:\t\t", str.replace(/ха/g, "**"));
console.log("replace/ха/i:\t\t", str.replace(/ха/i, "**"));
console.log("replace/ха/:\t\t", str.replace(/ха/, "**"));

/*
$&	вставляет всё найденное совпадение
$`	вставляет часть строки до совпадения
$'	вставляет часть строки после совпадения
$n	если n это 1-2 значное число, вставляет содержимое n-й скобочной группы регулярного выражения, больше об этом в главе Скобочные группы
$<name>	вставляет содержимое скобочной группы с именем name, также изучим в главе Скобочные группы
$$	вставляет символ "$"
*/

console.log("replace(/ха/, '$& **'):\t", str.replace(/ха/, "$&**"));
console.log("replace(/ха/, '$` **'):\t", str.replace(/ха/, "$`**"));
console.log("replace(/ха/, '$' **'):\t", str.replace(/ха/, "$'**"));

// r e g e x p . T E S T ( s t r )

console.log("\n r e g e x p . T E S T ( s t r )\n");
console.log("/ха/i.test('Ха-ха-ха')", /ха/i.test("Ха-ха-ха"));

// С В О Й С Т В А   Ю Н И К О Д

console.log("\n С В О Й С Т В А   Ю Н И К О Д \n");
console.log("str = ", (str = "Festivalnaya 14 'a'"), "\n");
console.log("str.match(/p{N}/gu) = ", str.match(/\p{N}/gu));
console.log("str.match(/p{L}/gu).join('') = ", str.match(/\p{L}/gu).join(""));

// Я К О Р Я

console.log("\n Я К О Р Я \n");
console.log("str = ", (str = "Festivalnaya 14a"), "\n");
console.log("/^Fest/.test(str) = ", /^Fest/.test(str));
console.log(
  "/^Festivalnaya 14a$/.test(str) = ",
  /^Festivalnaya 14a$/.test(str)
);
console.log("/14a$/.test(str) = ", /14a$/.test(str));
console.log(
  "/\\d\\d\\w$/.test(str) = ",
  /\d\d\w$/.test(str),
  "\t- шаблон проверяет налицие двух цифр и одной буквы в номере дома "
);
console.log(
  "/^$/.test(str) = ",
  /^$/.test(str),
  "\t- под этот формат подойдет только пустая строка"
);

// м н о г о с т р о ч н ы й   р е ж и м
// флаг /m влияет на поведение ^, $
// означает работу не со всем текстом, а с каждой строкой

console.log("\n м н о г о с т р о ч н ы й   р е ж и м \n");

console.log("str = ", (str = `\n1. Kalinina\n2. Viktoriya`));
console.log("str.match(/\\w\\w\\w$/m) = ", str.match(/\w\w\w$/gm));
console.log("str.match(/^\\d/gm) = ", str.match(/^\d/gm));

// г р а н и ц а   с л о в а   \b

console.log("\n г р а н и ц а   с л о в а \n");
console.log("str = ", (str = "Hello, JavaScript!"));
console.log(
  "str.match(/\\bJava\\b/) = ",
  str.match(/\bJava\b/),
  "\t - Java - часть другого слова"
);
console.log("\nstr = ", (str = "Hello, Java!"));
console.log("str.match(/\\bJava\\b/) =\t", str.match(/\bJava\b/));
console.log("str.match(/\\bHello\\b/) =\t", str.match(/\bHello\b/));

console.log("\nstr = ", (str = "Завтрак в 09:00 в комнате 123:456"));
console.log("str.match(/\\b\\d\\d\\b/g) =\t", str.match(/\b\d\d\b/g));

// Н А Б О Р Ы   И   Д И П А З О Н Ы
console.log("\n Н А Б О Р Ы   И   Д И П А З О Н Ы \n");
console.log("/[ВНЛ]ика/.test('Ника')", /[ВНЛ]ика/.test("Ника"));
console.log(
  "('Вика, Пика, Ника, Лика, Кика').match(/[ВЛ]ика/g)",
  "Вика, Пика, Ника, Лика, Кика".match(/[ВЛ]ика/g)
);

console.log(
  "\n'Завтрак в 09:00. Ужин в 21-30'.match(/\\d\\d[-:]\\d\\d/g)",
  "Завтрак в 09:00. Ужин в 21-30".match(/\d\d[-:]\d\d/g)
);

//  К В А Н Т И Ф И К А Т О Р Ы

console.log("\n К В А Н Т И Ф И К А Т О Р Ы \n");

console.log(
  '"1 12 123 12345 123456".match(/d{3}/) = \t',
  "1 12 123 12345 123456".match(/\d{3}/)
);

console.log("\n С К О Б О Ч Н Ы Е   Г Р У П П Ы \n");
console.log("kalinichika@gmail.com".match(/(.*)(@(.*)\.(.*))/));

console.log("\n О Б Р А Т Н Ы Е   С С Ы Л К И    В   Ш А Б Л О Н Е \n");
console.log(`He said: "She's the one!".`.match(/(['"])(.*?)\1/g));

// А Л Ь Т Е Р Н А Ц И Я

console.log("\n А Л Ь Т Е Р Н А Ц И Я \n");

console.log(
  `"Java, HTML, JavaScript".match(/html|java(script)?|css/gi) =\t`,
  "Появился Java, затем HTML, потом JavaScript.".match(
    /html|java(script)?|css/gi
  )
);
// шаблон для времени 00:00 - 23:59
console.log(
  `Шаблон для времени (/([01]\\d|2[0-3]):[0-5]\\d/g) =\t\t`,
  "01:24, 25:99, 222:00, 00:00, 23:59, 24:00, ".match(
    /([01]\d|2[0-3]):[0-5]\d/g
  )
);
// нахождение пары BB- кодов
str = `
[b]текст[/b]
[url]http://ya.ru[/url]
`;
console.log(`Найти пары BB-кодов =\t\t`, str.match(/\[(.*)\].*?\[\/\1\]/g));
str = `
[url][b]http://ya.ru[/b][/url]
`;
console.log(
  `Найти пары вложенных BB-кодов =\t`,
  str.match(/\[(.*)\].*?\[\/\1\]/g)
);
// нахождение строки в кавычках
str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
console.log(`Найти строки в кавычках =\t`, str.match(/"(\\.|[^"\\])*"/g));
/*
Напишите регулярное выражение, которое ищет тег <style...>. Оно должно искать весь тег: он может как не иметь атрибутов <style>, так и иметь несколько <style type="..." id="...">. Но регулярное выражение не должно находить <styler>!
*/
str = '<style> <styler> <style test="...">';
console.log("Найти весь тег <style> =\t", str.match(/<style(\s.*?>|>)/g));

// О П Е Р Е Ж А Ю Щ А Я   и   Р Е Т Р О С П Е К Т И В Н А Я  П Р О В Е Р К А

console.log("\n О П Е Р Е Ж А Ю Щ А Я   П Р О В Е Р К А   X(?=Y)   X(?!Y) ");
str = `
burger = 100$,
coca-cola 20$,
филе = 200руб,
water1 = 1€,
water2 20€,
`;
console.log(str.match(/.+(?=\d+\$)/g));
console.log(str.match(/water\d(?=.*\=)(?=.*\d+€)/g));
console.log(str.match(/water\d(?!.*\=)(?=.*\d+€)/g));

console.log(
  "\n Р Е Т Р О С П Е К Т И В Н А Я   П Р О В Е Р К А (?<=Y)X   (?<!Y)X "
);
str = `
100$ burger ,
20$ coca-cola ,
200руб филе ,
1€ water1,
20€ water2 ,
`;
console.log(str.match(/(?<=\d+\$).*/g));
