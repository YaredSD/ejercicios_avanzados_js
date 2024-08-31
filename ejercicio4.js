const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejercicio 4.1

function findArrayIndex(array, text) {
  for(i = 0; i < array.length; i++)
   if(text === array[i]){
       console.log("El personaje ", text, " se encuentra en la posición número ", i)
   }
}

findArrayIndex(mainCharacters, "Chewbacca");

// Ejercicio 4.2
function removeItem(array,text) {
  array.splice(text, 1)
  console.log("El personaje de la posición " + text + " ha sido eliminado de la lista." )
  return;
}

removeItem(mainCharacters, 3);
console.log(mainCharacters);