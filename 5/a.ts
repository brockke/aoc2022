export {}

const stackArray = [
    ["C", "Z", "N", "B", "M", "W", "Q", "V"],
    ["H", "Z", "R", "W", "C", "B"],
    ["F", "Q", "R", "J"],
    ["Z", "S", "W", "H", "F", "N", "M", "T"],
    ["G", "F", "W", "L", "N", "Q", "P"],
    ["L", "P", "W"],
    ["V", "B", "D", "R", "G", "C", "Q", "J"],
    ["Z", "Q", "N", "B", "W"],
    ["H", "L", "F", "C", "G", "T", "J"],
];

const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split('\n\n')[1].split('\n')
.map(i => i.split(' '))
.map(j => j.filter(k => !isNaN(Number(k))).map(l => Number(l)));

for (let m = 0; m < inputArray.length; m++){
    for (let n = 0; n < inputArray[m][0]; n++){
        stackArray[inputArray[m][2] - 1].push(stackArray[inputArray[m][1] - 1].pop()!)
    }
}

console.log(stackArray[0][stackArray[0].length-1],
    stackArray[1][stackArray[1].length-1],
    stackArray[2][stackArray[2].length-1],
    stackArray[3][stackArray[3].length-1],
    stackArray[4][stackArray[4].length-1],
    stackArray[5][stackArray[5].length-1],
    stackArray[6][stackArray[6].length-1],
    stackArray[7][stackArray[7].length-1],
    stackArray[8][stackArray[8].length-1],
    );