export function testFn(objet) {
  // Déclarez en dessous :
  const resultat = 'prenom' in objet && 'nom' in objet && typeof objet.prenom === 'string' && typeof objet.nom === 'string';
  // Ne touchez pas au return :
  return resultat;
}
