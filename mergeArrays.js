// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

//     Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//     Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]


// is this cheating?
const mergeArr = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2]
    return newArr.sort((a,b) => a - b)
}


// not cheating version
const mergeArr2 = (arr1, arr2) => {
    let longArr
    let shortArr
    if (arr1.length > arr2.length) {
        longArr = arr1
        shortArr = arr2
    } else {
        longArr = arr2
        shortArr = arr1
    }
    function merge(shortArr, longArr){
        let newArr = []
        let totalLength = shortArr.length + longArr.length
        for (let i = 0; i < totalLength; i++){
            if (!shortArr.length)
                newArr.push(longArr.shift())
            else if (!longArr.length) 
                newArr.push(shortArr.shift())
            else if (longArr[0] < shortArr[0])
                newArr.push(longArr.shift())
            else 
                newArr.push(shortArr.shift())
        }
        return newArr
    }
   return merge(shortArr, longArr)
}
console.log(mergeArr2([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

// this is O(n) linear time, directly proportional to the size of the two array inputs