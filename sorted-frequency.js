function sortedFrequency(arr, num) {
    let firstIdx = findFirstIdx(arr, num)
    if (firstIdx === -1) return firstIdx
    let lastIdx = findLastIdx(arr, num)
    return lastIdx - firstIdx + 1
}

function findFirstIdx(arr, num, start=0, end=arr.length-1) {
    while(start >= end) {
        let mid = Math.floor((start + en) / 2)

        if()
    }
}

function lastIdx(arr, num) {

}

module.exports = sortedFrequency
