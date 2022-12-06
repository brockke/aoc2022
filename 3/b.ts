export {}

const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split('\n').map(n => n.split('').map(i => {
    if (i.charCodeAt(0) > 96)
        return i.charCodeAt(0) - 96
    else
        return i.charCodeAt(0) - 38
}));

let prioSum = 0;
for (let j = 0; j < inputArray.length; j+=3){
    prioSum += inputArray[j].filter((value) => inputArray[j+1].includes(value) && inputArray[j+2].includes(value))[0];
}

console.log(prioSum)