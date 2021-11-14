export function obtenirMoyenne(arrays) {
  return arrays.map(
    (elem) =>
      Math.round(
        (elem.reduce((acc, curr) => acc + curr) / elem.length) * 10
      ) / 10
  )
}
