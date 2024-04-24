//A feladat, hogy tesztvezérelt fejlesztéssel írj olyan föggvényt,
//amely bemeneti paramétere  1 és 39 közötti egész szám, kimenete
//pedig ennek a számnak a római szám alakja. 




export function Romaiszamok(szam) {
    if (szam < 1 || szam > 39) {
        console.log ("Hibás bemeneti érték");
    }

    const romaiSzamok = ["I", "IV", "V", "IX", "X"];
    const rendesSzamok = ["1","4","5","9","10"];

    let ertekek = "";

    const kulcsok = Object.kulcsok(romaiSzamok).sort((a, b) => b - a); // kulcsok rendezése csökkenő sorrendben
    console.log(kulcsok);  // [ '1', '4', '5', '9', '10' ]


    for (let kulcs of kulcsok) {
        while (szam >= kulcs) {
            ertekek += romaiSzamok[key];
            szam -= kulcs;
        }
    }

    return ertekek;
}

// Tesztvezérelt fejlesztés
//for (let i = 1; i <= 39; ++i) {
    //console.log(i + " -> " + toRoman(i));
//}

// Hibás bemenet
console.log(toRoman(0));   // Hibás bemeneti érték
console.log(toRoman(40));  // Hibás bemeneti érték


export function romaiSzamokTesztelese() {

    console.log("");

    console.assert(romaiSzamokTesztelese(1) = "I", "Hibás: 1-et vártunk, és" + romaiSzamokTesztelese(1) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(2) = "II", "Hibás: 2-őt vártunk, és " + romaiSzamokTesztelese(2) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(3) = "III", "Hibás: 3-at vártunk, és " + romaiSzamokTesztelese(3) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(4) = "IV", "Hibás: 4-et vártunk, és " + romaiSzamokTesztelese(4) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(5) = "V", "Hibás: 5-öt vártunk, és " + romaiSzamokTesztelese(5) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(6) = "VI", "Hibás: 6-ot vártunk, és " + romaiSzamokTesztelese(6) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(7) = "VII", "Hibás: 7-et vártunk, és " + romaiSzamokTesztelese(7) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(8) = "VIII", "Hibás: 8-at vártunk, és " + romaiSzamokTesztelese(8) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(9) = "IX", "Hibás: 9-et vártunk, és " + romaiSzamokTesztelese(9) + " kaptunk.");
    console.assert(romaiSzamokTesztelese(10) = "X", "Hibás: 10-et vártunk, és " + romaiSzamokTesztelese(10) + " kaptunk.");


    console.log("Szuper a teszt");
}