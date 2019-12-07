// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

//     Input:

//     [[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]];

//     Output:

//     [[0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,1,1,0],
//     [0,0,0,0,0],
//     [0,0,1,1,0]];

function twoDArr(arr){
    const resultArr = []
    const indicesOfZeros = []
    let rowHasZero = false
    for (let i in arr){
        if (arr[i].includes(0)) {
            rowHasZero = true
        }
        else rowHasZero = false
        resultArr.push([])
        
        if (rowHasZero) {
            for (let j in arr[i]){
                if (arr[i][j] === 0) {
                    indicesOfZeros.push(j)
                }
            }
        }

        for (let j in arr[i]){
            if (rowHasZero)
                resultArr[i].push(0)
            else {
                if (indicesOfZeros.includes(j))
                    resultArr[i].push(0)
                else resultArr[i].push(1)
            }
        }
    }
    console.log(resultArr)
    return resultArr
}

 const arr = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
];

twoDArr(arr)