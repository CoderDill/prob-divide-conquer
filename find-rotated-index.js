function findRotatedIndex(arr, target) {
        let start = 0
        let pivotPnt = findPivotPnt(arr)
        let end = pivotPnt - 1

        while(start <= end) {
            console.log(start, end)
            let mid = Math.floor((start + end) / 2)
            
            if(arr[mid] === target) return mid

            if(target < arr[mid]) {
                end = mid - 1
            }else {
                start = mid + 1
            }
        }
        return -1
}

function findPivotPnt(arr) {
    let start = 0
    let end = arr.length - 1

    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > arr[mid + 1]) return mid + 1

    }
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)
module.exports = findRotatedIndex;
