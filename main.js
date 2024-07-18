function conjugate(verb){
  
  let verbEnding = verb.slice(-2)
  let verbBeginning = verb.slice(0, -2)
  let conjugatedArr = []

  const erVerbArr = [
    'o',
    'es',
    'e',
    'emos',
    'éis',
    'en'
  ]
  const arVerbArr = [
    'o',
    'as',
    'a',
    'amos',
    'áis',
    'an'
  ]
  const irVerbArr = [
    'o',
    'es',
    'e',
    'imos',
    'ís',
    'en'
  ]

  if (verbEnding === 'er') { 
    erVerbArr.forEach( e => conjugatedArr.push( `${verbBeginning}${e}`)) 
  } else if (verbEnding === 'ar') { 
    arVerbArr.forEach( e => conjugatedArr.push( `${verbBeginning}${e}`)) 
  } else if (verbEnding === 'ir') { 
    irVerbArr.forEach( e => conjugatedArr.push( `${verbBeginning}${e}`)) 
  }

  let conjugatedVerbObj = new Object
  conjugatedVerbObj[verb] = conjugatedArr
  // console.log(conjugatedVerbObj)

  return conjugatedVerbObj
}

console.log(conjugate('correr'))
console.log(conjugate('montar'))
console.log(conjugate('recibir'))

// parameters: verb   // a string
// return: verboConjugado   // an object containing a key (the verb) and a value (an array of the conjugations)
// e.g. conjugate('correr')
// results in {
// 'correr': ['corro', 'corres', 'corre', 'corremos', 'corréis', 'corren']
// }

// declare a variable called verbBeginning, assinged to a substring of all the letters before the verb's ending
// declare a variable called verbEnding, assigned to a substring of the last two letters of verb
// declare a variabled called conjugatedArr, assigned to an empty array
// create an array called erVerbArr, containing strings of each er verb ending
// create an array called arVerbArr, containing strings of each ar verb ending
// create an array called irVerbArr, containing strings of each ir verb ending
// if verbEnding equals 'er', loop through ErVerbArr, concatenating verbBeginning to the front of each string er ending and pushing that to conjugatedArr
// if verbEnding equals 'ar', loop through ArVerbArr, concatenating verbBeginning to the front of each string ar ending and pushing that to conjugatedArr
// if verbEnding equals 'ir', loop through IrVerbArr, concatenating verbBeginning to the front of each string ir ending and pushing that to conjugatedArr
// return a new object with key value pair of verb: conjugatedArr














// create a class called ErVerb with a constructor containing the er verb endings
// create a class called ArVerb with a constructor containing the ar verb endings
// create a class called IrVerb with a constructor containing the ir verb endings
