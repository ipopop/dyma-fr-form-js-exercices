export function compterElements(arr) {
  const result = arr.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1
    return prev
  }, {})
  return result
}

// const testList = [
//   'veste',
//   'clé',
//   'verre',
//   'chien',
//   'biberon',
//   'chien',
//   'veste',
//   'clé',
//   'chien',
// ]

// compterElements(testList)


// result
// {
//   veste: 2,
//   clé: 2,
//   verre: 1,
//   chien: 3,
//   biberon: 1,
// }