export function plusGrandNombre(...args) {
  const list = [...args]
  let i
  let max = -Infinity
  for (i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}
