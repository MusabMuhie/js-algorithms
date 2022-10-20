function searchReplace(str, word, newWord) {
   /* let regex = new RegExp(word, "gi")

    if (/[A-Z]/.test(word[0])) {

        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return str.replace(regex, newWord)*/

    return str.replace(word,newWord.charAt(0).toUpperCase()+newWord.slice(1))
}



module.exports = searchReplace