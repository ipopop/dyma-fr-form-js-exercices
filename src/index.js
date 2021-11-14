export function testFn(personne) {
  // Déclarez en dessous :
  const { familly: { father } } = personne;
  const { firstname: prenom, lastname: nom } = father
  // Ne touchez pas au return :
  return { prenom, nom };
}
