// Jumat - More Arrays + Multidimensional Array

function mengelompokkanAngka(arr) {
  var arrResult = [];
  var b1 = []; // arr genap
  var b2 = []; // arr ganjil
  var b3 = []; // arr kelipatan3
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      b3.push(arr[i]);
    }else if (arr[i] % 2 !== 0) {
      b2.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      b1.push(arr[i]);
    }
  }
  arrResult.push(b1, b2, b3); // console.log(b1);// console.log(b2);// console.log(b3);
  return arrResult;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]