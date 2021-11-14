export function testFn(objet) {
  // Déclarez en dessous :
  const copie = JSON.parse(JSON.stringify(objet));
  // Ne touchez pas au return :
  return copie;
}
