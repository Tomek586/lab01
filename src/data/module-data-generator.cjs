const fs = require('fs');

const count = Number(process.argv[2]); // Odczyt liczby obiektów
let names = []; // Tablica z imionami

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Podział łańcucha z imionami na wiersze
    names = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);
    
    let content = "export const data = [\n";
    
    for (let i = 0; i < count; i++) {
        // Generowanie unikalnego id
        const id = i + 1;
        
        // Losowanie imienia z biblioteki imion
        const name = names[Math.floor(Math.random() * names.length)];
        
        // Losowanie daty urodzenia (zakres: 1990-2020)
        const birth = new Date(1990 + Math.floor(Math.random() * 31), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0];
        
        // Losowanie koloru oczu
        const eyes = ["blue", "green", "brown"][Math.floor(Math.random() * 3)];

        // Dodawanie obiektu do treści
        content += `  { id: ${id}, name: "${name}", birth: "${birth}", eyes: "${eyes}" },\n`;
    }

    content += "];\n";

    // Zapis do pliku module-data.js w katalogu src
    fs.writeFile('./src/module-data.js', content, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("module-data.js generated");
        }
    });
});
