export {}

type Node = {
    parent?: Node;
    child: { [name: string]: Node };
    leaf: { [name: string]: number };
};

const files: Node = {child: {}, leaf: {}};
let curNode = files;

const input = (await Deno.readTextFile("./input.txt")).split('\n');

for (let i = 0; i < input.length; i++){
    const [action, ...text] = input[i].split(' ');
    if (action === '$'){
        if (text[0] === 'ls'){
            //Do nothing    
        }
        else if (text[0] === 'cd'){
            if (text[1] === '/'){
                curNode = files
            }
            else if (text[1] === '..'){
                curNode = curNode.parent!;
                
            }
            else{
                curNode.child[text[1]] = {
                    parent: curNode, child: {}, leaf: {}
                };
                curNode = curNode.child[text[1]];
            }
        }
    }
    else if (action !== 'dir'){
        curNode.leaf[text[0]] = parseInt(action);
    }
}

let sizeUnder100k = 0;
const sizeInNode = (node: Node): number => {
    let size = 0;

    for (const leaf in node.leaf){
        size += node.leaf[leaf];
    }
    for (const child in node.child){
        size += sizeInNode(node.child[child])
    }

    if (size <= 100000)
        sizeUnder100k += size;

    return size
}

sizeInNode(files);

console.log(sizeUnder100k);