let num = [-2, -3, -5, 0, 10, 9, 34, 12, 22, -1, 4, 0];
for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num.length; j++) {
    if (num[j] > num[j + 1]) {
      let list_num = num[j];
      num[j] = num[j + 1];
      num[j + 1] = list_num;
    }
  }
}
console.log(num);
