// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

const filter = arr => {
    const newArr = []
    for (let i = arr.length -1; i >=0; i--){
        if (arr[i] < 5) arr.splice(i,1)
    }
    return arr
}

console.log(filter([11, 10, 12, -6, 3, 203, -14]))