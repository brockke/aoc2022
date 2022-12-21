export {}

const input = (await Deno.readTextFile("./input.txt")).split("\n");

const headPos = { x: 0, y: 0};
const tail1 = { x: 0, y: 0};
const tail2 = { x: 0, y: 0};
const tail3 = { x: 0, y: 0};
const tail4 = { x: 0, y: 0};
const tail5 = { x: 0, y: 0};
const tail6 = { x: 0, y: 0};
const tail7 = { x: 0, y: 0};
const tail8 = { x: 0, y: 0};
const tail9 = { x: 0, y: 0};
const rope = [headPos, tail1, tail2, tail3, tail4, tail5, tail6, tail7, tail8, tail9];
const posVisited = new Set<String>();

for (const line of input) {
    const direction = line[0];
    const moves = Number(line.split(' ')[1]);

    for (let i = 0; i < moves; i++){
        if(direction == 'R')
            headPos.x++
        else if(direction == 'L')
            headPos.x--
        else if(direction == 'U')
            headPos.y++
        else if(direction == 'D')
            headPos.y--
        
        for (let j = 1; j < rope.length; j++){
            const [current, previous] = [rope[j], rope[j-1]];
            if ((current.x >= (previous.x - 1)) && 
                (current.y >= (previous.y - 1)) &&
                (current.x <= (previous.x + 1)) &&
                (current.y <= (previous.y + 1))){
                //Do Nothing
            }
            else if (current.x == previous.x && current.y < previous.y)
                current.y++;
            else if (current.x == previous.x && current.y > previous.y)
                current.y--;
            else if (current.y == previous.y && current.x < previous.x)
                current.x++;
            else if (current.y == previous.y && current.x > previous.x)
                current.x--;
            else if (current.x < previous.x && current.y < previous.y){
                current.x++;
                current.y++;
            }
            else if (current.x > previous.x && current.y > previous.y){
                current.x--;
                current.y--;
            }
            else if (current.x > previous.x && current.y < previous.y){
                current.x--;
                current.y++;
            }
            else if (current.x < previous.x && current.y > previous.y){
                current.x++;
                current.y--;
            }
            else{
                console.error('ERROR');
            }
            if(j == rope.length-1)
                posVisited.add(JSON.stringify({ x: current.x, y: current.y}));
        }
    }
}

console.log(posVisited.size);