// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

//     Input: amazon, azonma

//     Output: False

//     Input: amazon, azonam

//     Output: true

function strRotation(str1, str2){
    let isRotation = false

    const rotations = []
    let rotation = str1

    for (let i = 0; i < str1.length; i++){
        const firstLetter = rotation.charAt(0)
        rotation = rotation.substring(1) 
        rotation+= firstLetter
        rotations.push(rotation)
    }
    if (rotations.includes(str2)) 
        isRotation = true
    
    console.log(isRotation)
    return isRotation
}

strRotation('amazon', 'azonam') //true
strRotation('amazon', 'azonma') //false