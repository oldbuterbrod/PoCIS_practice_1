# Программирование корпоративных индустриальных систем. Практика 1. Сидоров Максим Максимович ЭФМО-02-24
## Описание
Необходимо разработать консольное приложение, которое выполняет обработку текстовых файлов с базовыми функциями, такими как открытие, чтение, поиск определенного слова и вывод количества его повторений. Дополнительно реализовать функции работы с памятью с использованием системы владения и заимствования.
## Реализуемые задачи
1.	Создать консольное приложение с вводом параметров через командную строку:
Указание пути к текстовому файлу.
Задание слова для поиска.
2.	Реализовать функцию чтения содержимого текстового файла:
Использовать систему владения для передачи данных.
Учитывать обработку ошибок (например, файл не найден).
3.	Реализовать поиск заданного слова в тексте:
Определить количество его повторений.
Использовать неизменяемые ссылки для анализа содержимого.
4.	Вывести результаты в консоль в формате:
Общее количество слов в файле.
Количество повторений заданного слова.
5.	Реализовать базовый тест для проверки функции поиска слова.
## Код программы
Программа реализована на языке Node.JS. Для ее запуска необходимо в терминале ввести команду «node <путь к файлу> <слово для поиска>».

const fs = require('fs');

const filePath = process.argv[2]; 
const searchWord = process.argv[3]; 

if (!filePath || !searchWord) {
    console.error('Ошибка! Пропущен аргумент');
    process.exit(1);
}

try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const words = fileContent.split(/\s+|[.,!?;:()"'-]+/).filter(Boolean);
    const totalWords = words.length;
    const target = searchWord.toLowerCase();
    const count = words.filter(word => word.toLowerCase() === target).length;


    console.log('Содержимое файла:');
    console.log(fileContent);
    console.log(`Общее количество слов в файле: ${totalWords}`);
 
    console.log(count > 0
        ? `Слово "${searchWord}" встречается ${count} раз(а).`
        : `Слово "${searchWord}" в тексте не найдено.`
    );


} catch (error) {
    console.error('Ошибка! Файл не найден!');
}

## Пример работы програмы

>> node .\PoCIS_1.js .\textfile.txt in
Содержимое файла:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Общее количество слов в файле: 69
Слово "in" встречается 3 раз(а).

