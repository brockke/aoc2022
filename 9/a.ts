export {}

const input = (await Deno.readTextFile("./input.txt")).split("\n");

const headPos = { x: 0, y: 0};
const tailPos = { x: 0, y: 0};
const rope = [headPos, tailPos];
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
            posVisited.add(JSON.stringify({ x: current.x, y: current.y}));
        }
    }
}

console.log(posVisited.size);