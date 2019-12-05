// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

//     Input: [4, 6, -3, 5, -2, 1]
//     Output: 12


function runMaxSum(arr){
    const copy = [...arr]
    const reverseArr = copy.reverse()
    let max = 0

    const getMax = (array) => {
        if (!array.length) return
        const maxContender = array.reduce((a,b) => a+b)
        if (maxContender > max)
        max = maxContender
        array.splice(0,1)
        return getMax(array, max)
    }
    
    getMax(arr)
    getMax(reverseArr)
    return max
}

console.log(runMaxSum([4, 6, -3, 5, -2, 1]))

// 