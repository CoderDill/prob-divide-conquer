function findRotatedIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  const mid = Math.floor((start + end) / 2);

  while (start < end) {
    if (arr[mid] === target) return mid;
  }
}

module.exports = findRotatedIndex;
