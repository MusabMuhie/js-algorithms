/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   let arr=text.split(' ')
   return arr.map(el=>el=el[0].toUpperCase()+el.slice(1).toLowerCase()).join(' ')
}



module.exports = capSentence