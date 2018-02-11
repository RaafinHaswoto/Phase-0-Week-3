// Selasa - Mengenal Tipe Data Array

function balikKata(str) {
    var newKata = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newKata += str[i];
    }
    return newKata;
}

console.log(balikKata('hello world!'));
