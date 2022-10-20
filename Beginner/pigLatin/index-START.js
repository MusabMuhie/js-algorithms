/*
Translate the provided string to pig latin by following the rules below:

- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

function pigLatin(str) {
  let vowels=['a','e','i','o','u']

  if(vowels.includes(str[0])){
    return str.concat('way')
  }else if(vowels.includes(str[1])){
    let arr=str.split('')
    let first=arr.shift()
    return arr.push(first).join('').concat('ay')
  }else{
    let arr=str.split('')
    let firstVowel=arr.find(el=>vowels.includes(el))
    let newArr=str.split(firstVowel)
    let first=newArr.shift()
    return newArr.push(first).join('').concat('ay')
  }
}

module.exports = pigLatin;
