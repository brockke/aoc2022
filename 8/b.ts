export {}

const input = (await Deno.readTextFile("./input.txt")).split('\n').map(x => x.split('').map(y => Number(y)+1));

const scenicArray = Array.from({length: input.length}, () => new Array(input[0].length));

for (let i = 0; i < input.length; i++){
    for (let j = 0; j < input[0].length; j++){

        const treeHeight = input[i][j]
        let xp = 0;
        let xn = 0;
        let yp = 0;
        let yn = 0;

        while ((i+xp+1 < input.length) && ((input[i+xp][j] < treeHeight) || xp == 0)) {
            xp++;
        }  
        while ((i-xn > 0) && ((input[i-xn][j] < treeHeight) || xn == 0)) {
            xn++;
        }
        while ((j+yp < input[0].length) && ((input[i][j+yp] < treeHeight) || yp == 0)) {
            yp++;
        }
        while ((j-yn > 0) && ((input[i][j-yn] < treeHeight) || yn == 0)) {
            yn++;
        }
        
        scenicArray[i][j] = xp * xn * yp * yn;
    }
}

// console.log(scenicArray);
console.log(Math.max(...scenicArray.flat()));