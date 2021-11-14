export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = '';

  if ((typeof nombre) !== 'number') {
    return 'Pas un nombre';
  } else {
    for (let i = 0; i < 5; i++) {
      let acc;
      if (i === 2) {
        continue;
      } else {
        acc = nombre + i;
      }
      texte = ''.concat(texte, acc)
    }
  }
  return texte;
}
