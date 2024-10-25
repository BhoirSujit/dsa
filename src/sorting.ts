//selction sort

function selectionSort(nums: Number[]): Number[] {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }

    //swap
    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }

  return nums;
}




let arr = [12,543,24,3,25,232,4,34];

console.log("original array: ", arr);

let sarr = selectionSort(arr);
console.log("soretd array : ", sarr);