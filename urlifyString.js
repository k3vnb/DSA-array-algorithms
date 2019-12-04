// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

//     Input: tauhida parveen

//     Output: tauhida%20parveen

//this works but its not an array based solution - O(n) linear time
const urlifyStr = str => {
    let chunk = ''
    const space = ' '
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === space){
            chunk+='%20'
        } else {
            chunk+= str.charAt(i)
        }
    }
    return chunk
}

console.log(urlifyStr('hello world, hello moon'))

// arr based solution - O(n) - linear based on size of string, and then I think another O(n) operation depending on size of created array 
const urlifyStr2 = str => {
    const arr = str.split(' ').join('%20')
    return arr
}

console.log(urlifyStr2('hello str 2 mehtod '))
