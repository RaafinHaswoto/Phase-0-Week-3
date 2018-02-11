// Rabu - Logic Challenges Refresh

function pasanganTerbesar(num) {
  var num1=num.toString();
  var hasil='';
  var terbesar=0;
  for(var i=0; i<num1.length; i++){
    hasil=Number(num1[i]+num1[i+1]);
    if(hasil>terbesar){
      terbesar=hasil;
    }
  }
  return terbesar;
  
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99*/