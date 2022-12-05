export {}

const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split('\n\n').map(n => n.split('\n').map(x => parseInt(x)).reduce((a, b) => a + b, 0));
const maxNum = Math.max(...inputArray);

console.log(maxNum);
