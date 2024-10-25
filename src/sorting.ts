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

function bubbleSort(nums : number[]) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length - i; j++) {
            if (nums[j] < nums[j-1]) {
                //swap
                nums[j-1] = nums[j-1] + nums[j];
                nums[j] = nums[j-1] - nums[j];
                nums[j-1] = nums[j-1] - nums[j];
                
            }
        }
    }
    return nums;
}




let arr = [12,543,24,3,25,232,4,34];

console.log("original array: ", arr);

let sarr = bubbleSort(arr);
console.log("soretd array : ", sarr);