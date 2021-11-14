export function lePlusGrand(a, b, c) {
  const list = [a, b, c]
  let i
  let max = -Infinity
  for (i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}
