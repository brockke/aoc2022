export {}

const input = (await Deno.readTextFile("./input.txt")).split("\n");

const maxCycles = 241;
let sigSrength = 0;
let register = 1;
let inputPointer = 0;
let executeTime = 0;
for (let cycle = 1; cycle < maxCycles; cycle++){
    const [cmd, ...num] = input[inputPointer].split(' ');

    if (executeTime == 0){
        if (cmd == 'noop'){
            executeTime = 1;
        }
        else if (cmd == 'addx'){
            executeTime = 2;
        }
    } 
    
    if (cycle == 20 || (((cycle + 20) % 40 == 0) && cycle > 20)){
        // console.log(cycle, register)
        sigSrength += cycle * register;
    }
        

    if (executeTime != 0){
        executeTime--;
        if (executeTime == 0){
            inputPointer++;
            if (cmd == 'addx')
                register+= Number(num)
        }
    }
}

console.log(sigSrength);