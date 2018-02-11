// Selasa - Mengenal Tipe Data Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling() {

var nama = input[1].split(' ')
var provinsi = input[2].split(' ')

nama.push('Elsharawy')
provinsi.unshift('Provinsi')

input.splice(1,1, nama.join(' '))
input.splice(2,1, provinsi.join(' '))
input.splice(4,1, 'Pria', 'SMA Internasional Metro')

console.log(input);

var menggantiBulan = input[3].split("/"); 
var bulan = parseInt(menggantiBulan[1]);

switch(bulan){
  case 01 : {bulan='Januari';break;}
  case 02 : {bulan='februari'; break;}
  case 03 : {bulan='maret'; break;}
  case 04 : {bulan='april'; break;}
  case 05 : {bulan='mei'; break;}
  }
  
console.log(bulan)

var sort = menggantiBulan
menggantiBulan.sort(function(a,b) {return b - a});
console.log(menggantiBulan)

var gantiStrip = input[3].split("/"); 
// menggantiBulan.join('-')
console.log(gantiStrip.join('-'))


var namaAja = input[1].split('')
namaAja.splice(15, 10) 
  console.log(namaAja.join(''));

}

dataHandling();