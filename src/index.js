export function testFn(condition, age) {
  // Déclarez en dessous :
  const a = 42;
  const b = condition ? a : 0;
  const statut = (age >= 21) ? 'Majeur aux USA' : (age >= 18) ? 'Majeur en France' : 'Mineur';

  // Ne touchez pas au return.
  return [b, statut];
}
