export function obtenirMediane(arrayOfNotes) {
  // use map(), slice() & sort() + operator %
  return arrayOfNotes.map((elem) => {
    const middle = Math.floor(elem.length / 2)
    console.log('middle : ', middle)

    const sorted = elem.slice().sort((a, b) => a - b)
    console.log('sorted : ', sorted)
    
    return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle]
  })
}

// const testArr = ([[2, 14, 16, 15, 5], [7, 2, 4]])
// const testArr2 = ([[12, 14, 12, 13], [2, 14, 1, 5]])

// obtenirMediane(testArr)
// console.log('_*_*_*_*_*_*_*_')
// obtenirMediane(testArr2)

// result 
// [14, 4]
// [12.5, 3.5]

// Solution
/*
export function obtenirMediane(tableau) {
  return tableau.map((notes) => {
    // Nous récupérons l'élément du milieu. N'oubliez pas que l'index d'un tableau commence à 0
    // donc s'il y a par exemple 5 éléments dans le tableau il faut le 3ème donc celui avec un index 2
    // c'est pour cela que nous utilisons Math.floor().
    const milieu = Math.floor(notes.length / 2);
    // Il faut penser à copier le tableau de notes car sort() modifie le tableau
    // d'origine, ce que nous ne souhaitons pas.
    const notesTriees = notes.slice().sort((a, b) => a - b);
    // Ici nous regardons si le nombre d'éléments du tableau est pair ou impair
    return notesTriees.length % 2 === 0
      ? // Si le nombre d'éléments est pair, il nous faut faire la moyenne des deux éléments du milieu
        // pour obtenir la médiane :
        (notesTriees[milieu - 1] + notesTriees[milieu]) / 2
      : // Si le nombre d'éléments est impair, il suffit de prendre l'élément du milieu
        notesTriees[milieu];
  });
}
*/