// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

//     Input:[1, 3, 9, 4]
//     Output:[108, 36, 12, 27]

function findProduct(arr){
    let output = []
    for (i in arr){
        const copy = [...arr]
        copy.splice(i, 1)
        const product = copy.reduce((a,b) => a*b)
        output.push(product)
    }

    console.log(output)
}

findProduct([1, 3, 9, 4])
