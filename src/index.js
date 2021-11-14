export function testFn(nombre) {
  // Déclarez en dessous :
  if (typeof nombre !== 'number' || isNaN(nombre)){
    return 'Pas un nombre';
  } else if (!Number.isInteger(nombre)) {
    nombre = Number((+nombre).toFixed(3));
  }
  // Ne touchez pas au return :
  return nombre;
}