let nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let sorted = 1;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[i - 1]) {
    nums[sorted] = nums[i];
    sorted++;
  }
}
console.log(nums);
console.log(sorted);

let head = [1, 2, 3, 4, 5];
let ind = 2;
for (let i = 1; i < head.length; i++) {
  if (head.indexOf(ind)) {
    head.splice(head[i] + 1, 1);
  }
}
console.log(head);
