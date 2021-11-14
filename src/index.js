export function trierTableaux(arr) {
  return arr.sort((a, b) => {
    return b.prix - a.prix ? b.prix - a.prix : b.quantite - a.quantite;
  });
}