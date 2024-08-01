let nums1 = [1, 2, 3, 5, 6];
let nums2 = [1, 2, 3, 4, 5];
let twin: number[] = [];

function getCommon(nums1: number[], nums2: number[]): number {
  if (nums1[nums1.length - 1] < nums2[0]) {
    return -1;
  }
  for (let a = 0; a < nums1.length; a++) {
    if (nums2.includes(nums1[a])) {
      return nums1[a];
    }
  }
  return -1;
}
// if(nums1[nums1.length-1]<nums2[0]){
//     console.log
// }
// for (let a = 0; a < nums1.length; a++) {
//    if (nums2.includes(nums1[a])) {
//       console.log(nums1[a])
//     }
//   }

// let smallest = [];
// for (let c = 0; c < twin.length; c++) {
//   if (smallest.length === 0 || twin[c] < smallest[c]) {
//     smallest.push(twin[c]);
//   }
// }
// console.log(smallest);
