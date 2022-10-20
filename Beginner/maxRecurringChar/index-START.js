/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here
    let obj={}
    for(let char of text){
        if(obj.hasOwnProperty(char)){
            obj[char]++
        }else{
            obj[char]=1
        }
    }

    let charArray=Object.keys(obj)
    let valuesArray=Object.values(obj)
    let maxCharValue= Math.max(...valuesArray)
    return charArray[valuesArray.indexOf(maxCharValue)]
}



module.exports = maxRecurringChar;