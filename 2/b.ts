export {}

const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split('\n').map(n => n.split(' ').map(i => {
    if (i.charCodeAt(0) > 87)
        return i.charCodeAt(0) - 87
    else
        return i.charCodeAt(0) - 64
}));

let score = 0;
for (let j = 0; j < inputArray.length; j++){
    score += ((inputArray[j][1] - 1) * 3);

    if (inputArray[j][1] == 2)
        score += inputArray[j][0];
    else if((inputArray[j][0] == 1 && inputArray[j][1]) == 1)
        score += 3
    else if((inputArray[j][0] == 2 && inputArray[j][1]) == 1)
        score += 1
    else if((inputArray[j][0] == 3 && inputArray[j][1]) == 1)
        score += 2
    else if((inputArray[j][0] == 1 && inputArray[j][1]) == 3)
        score += 2
    else if((inputArray[j][0] == 2 && inputArray[j][1]) == 3)
        score += 3
    else if((inputArray[j][0] == 3 && inputArray[j][1]) == 3)
        score += 1
}

console.log(score);
