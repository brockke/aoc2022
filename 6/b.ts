export {}

const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split('')
const initialLength = inputArray.length
const packetBuffer = inputArray.splice(0,14)

while (inputArray.length != 0) {
    if((new Set(packetBuffer)).size == packetBuffer.length)
        break
    packetBuffer.shift()
    packetBuffer.push(inputArray.shift()!)
}

console.log(initialLength - inputArray.length)