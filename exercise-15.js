// Jumat - More Arrays + Multidimensional Array

function groupAnimals(animals) {
        var results = [];
        for (var i = 0; i < animals.length; i++) {
          if (animals.indexOf == 0) 
          results.push(animals[i]);
        }
       console.log(results)
      
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]