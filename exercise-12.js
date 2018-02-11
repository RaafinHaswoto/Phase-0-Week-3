// Kamis - More Logic Challenges

function tentukanDeretGeometri(arr) {
    if (arr.length <= 2) return true; 
    var a = arr[1],                   
        r = a / arr[0],               
        i;
    for (i = 2; i < arr.length; ++i)
        if ((a *= r) !== arr[i]){
            return false
        } else {
            return true
        }
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


  function isGeometric(arr) {
    if (arr.length <= 2) return true; 
    var a = arr[1],                   
        r = a / arr[0],               
        i;
    for (i = 2; i < arr.length; ++i)
        if ((a *= r) !== arr[i])
            return false;
    return true;
}