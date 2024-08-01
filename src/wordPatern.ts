let pattern = "abba";
let su = "dog cat cat dog";
let sim = su.split(" ");
let right = true;
if (pattern.length !== sim.length) {
  right = false;
}
type pattern = {
  [key: string]: string;
};
let definition: pattern = {};
let nilai: Array<string> = [];
for (let i = 0; i < pattern.length; i++) {
  if (!definition[pattern[i]] && !nilai.includes(sim[i])) {
    definition[pattern[i]] = sim[i];
    nilai.push(sim[i]);
  } else if (
    (!definition[pattern[i]] && nilai.includes(sim[i])) ||
    definition[pattern[i]] !== sim[i]
  ) {
    right = false;
  } else {
    right = true;
  }
}

console.log(right);
console.log(definition);
