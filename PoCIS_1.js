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

