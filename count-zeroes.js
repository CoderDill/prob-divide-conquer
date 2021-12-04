// function countZeroes(arr) {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;

//   while (leftIdx <= rightIdx) {
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];
//     if (middleVal === 1) {
//       leftIdx = middleIdx + 1;
//     } else if (leftIdx === 0) {
//       firstZero = arr[leftIdx]
//     }
//      else if (middleVal === 0) {
//         rightIdx = middleIdx
//     }
//     else if (leftIdx === rightIdx) {
//       let firstZero = leftIdx
//       if (firstZero === -1) return 0;
//       return arr.length - firstZero;
//     }
//     return 0;
//   }
// }

function countZeroes(arr) {
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
}

function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high);
    }
    return findFirst(arr, low, mid - 1);
  }
  return -1;
}
module.exports = countZeroes;
