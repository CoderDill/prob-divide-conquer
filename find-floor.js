// function findFloor(arr, target) {
//   let leftIdx = 0;
//     let rightIdx = arr.length - 1;
    
//   while (leftIdx <= rightIdx) {
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];
//     if (middleVal < target) {
//       leftIdx = middleVal + 1;
//     } else if (middleVal > target) {
//         rightIdx = middleVal - 1;
//         if (arr[rightIdx] < target) {
//             return arr[rightIdx]
//         }
//     } else {
//       return arr[middleIdx - 1];
//     }
//   }
//     return -1
// }

function findFloor(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  if (num >= arr[high]) return arr[high];

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === num) return arr[mid];

  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }

  if (num < arr[mid]) {
    return findFloor(arr, num, low, mid - 1);
  }

  return findFloor(arr, num, mid + 1, high);
}

module.exports = findFloor;

[1, 2, 8, 10, 10, 12, 19], 11;
