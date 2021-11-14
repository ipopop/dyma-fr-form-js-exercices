export function filtreFemmesEtAjouteNomComplet(array) {
  return array
    .filter((person) => person.genre === 'féminin')
    .map((person) => ({
      nomComplet: `${person.prenom} ${person.nom}`,
      ...person,
    }))
}

// const test = [
//   { prenom: 'Albert', nom: 'Einstein', genre: 'masculin' },
//   { prenom: 'Isaac', nom: 'Newton', genre: 'masculin' },
//   { prenom: 'Marie', nom: 'Curie', genre: 'féminin' },
//   { prenom: 'Max', nom: 'Planck', genre: 'masculin' },
//   { prenom: 'Simone', nom: 'de Beauvoir', genre: 'féminin' },
//   { prenom: 'Rosalind', nom: 'Franklin', genre: 'féminin' },
// ]
// filtreFemmesEtAjouteNomComplet(test)

// result
// [
//   {
//     prenom: 'Simone',
//     nom: 'de Beauvoir',
//     nomComplet: 'Simone de Beauvoir',
//     genre: 'féminin',
//   },
//   {
//     prenom: 'Rosalind',
//     nom: 'Franklin',
//     nomComplet: 'Rosalind Franklin',
//     genre: 'féminin',
//   },
//   {
//     prenom: 'Marie',
//     nom: 'Curie',
//     nomComplet: 'Marie Curie',
//     genre: 'féminin',
//   },
// ]