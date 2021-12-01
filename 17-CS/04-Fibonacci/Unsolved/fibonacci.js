// Linear Approach
const linear = num => {
  let i = 0;
for (i = 0; i < num; i++) {
  i+(i+i);
}
};

console.log(linear(10)); // => 55
