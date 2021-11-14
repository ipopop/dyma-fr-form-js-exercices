export function testFn(chaine) {
  // Déclarez en dessous :
  let lower = chaine.toLowerCase();
  chaine = lower.charAt(0).toUpperCase() + lower.slice(1);
  // Ne touchez pas au return :
  return chaine;
}
