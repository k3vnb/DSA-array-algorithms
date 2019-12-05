// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

function removeChars(str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const lowerCase = str.toLowerCase()
    let newStr = ''
    for (let i = 0; i<str.length; i++){
        if (!vowels.includes(lowerCase.charAt(i))) 
            newStr+=str.charAt(i)
    }
    console.log(newStr)
}

removeChars("Battle of the Vowels: Hawaii vs. Apalachia")

//this 