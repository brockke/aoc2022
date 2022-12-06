export {}

const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split('\n').map(n => n.split(',').map(i => i.split('-').map(j => Number(j))));

let assignOverlap = 0;

for (let k = 0; k < inputArray.length; k++){
    if (!(inputArray[k][0][1] < inputArray[k][1][0] || inputArray[k][0][0] > inputArray[k][1][1]))
        assignOverlap++
}

console.log(assignOverlap)