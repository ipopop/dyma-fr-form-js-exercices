export function testFn(fichier) {
  // Déclarez en dessous :
  let reponse = fichier.match(/(\w+$)/igm).toString();
  // Ne touchez pas au return :
  return reponse;
}
