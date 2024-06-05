function hasSubarrayWithSum(arr, target) {
  let currentSum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

const arr = [7, 1, 8, 5,50,50];
const target = 100;

if (hasSubarrayWithSum(arr, target)) {
  console.log("current array can form target sum from  ");
} else {
  console.log("no combination can form target sum in current array");
}
