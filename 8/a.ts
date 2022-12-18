export {}

const input = (await Deno.readTextFile("./input.txt")).split('\n').map(x => x.split('').map(y => Number(y)+1));

for (let i = 0; i < input.length; i++){
    let largestTree = 0;
    for (let j = 0; j < input[i].length; j++){
        if (Math.abs(input[i][j]) > largestTree){
            largestTree = Math.abs(input[i][j]);
            if (input[i][j] > 0)
                input[i][j] = -input[i][j]
        }
    }
    largestTree = 0;
    for (let j = input[i].length-1; j > 0; j--){
        if (Math.abs(input[i][j]) > largestTree){
            largestTree = Math.abs(input[i][j]);
            if (input[i][j] > 0)
                input[i][j] = -input[i][j]
        }
    }
}
for (let j = 0; j < input[0].length; j++){
    let largestTree = 0;
    for (let i = 0; i < input.length; i++){
        if (Math.abs(input[i][j]) > largestTree){
            largestTree = Math.abs(input[i][j]);
            if (input[i][j] > 0)
                input[i][j] = -input[i][j]
        }
    }
    largestTree = 0;
    for (let i = input.length-1; i > 0; i--){
        if (Math.abs(input[i][j]) > largestTree){
            largestTree = Math.abs(input[i][j]);
            if (input[i][j] > 0)
                input[i][j] = -input[i][j]
        }
    }
}

const highTrees = input.flat().reduce((a, b) => a + (b < 0 ? 1 : 0), 0)

console.log(highTrees);