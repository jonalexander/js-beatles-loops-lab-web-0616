function theBeatlesPlay(musicians, instruments) {
 const myArray = [];

 for (var i = 0; i < musicians.length; i++) {
  myArray.push(`${musicians[i]} plays ${instruments[i]}`);
 }
 return myArray;
}

function johnLennonFacts(factsArray) {
 const screamingFacts = [];

 var counter = 0
 while (counter < factsArray.length) {
  screamingFacts.push(`${factsArray[counter]}!!!`)
  counter++
 }

 return screamingFacts
}

function iLoveTheBeatles(num) {
 var arr = []

 do {
  arr.push(`I love the Beatles!`)
  num++
 } while (num < 15)

 return arr
}