// The second argument/parameter is expected to be a (callback) function


const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found([i]);   // execute callback
//     }
//   }
  names.forEach(function(name) {
    if (name === "Waldo") {
      found(name, names.indexOf(name));
    }
  })
};

const actionWhenFound = function(name, i) {
  console.log(`Found ${name} at ${i}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);