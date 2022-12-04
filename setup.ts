import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const day = Deno.args.length ? Deno.args[0] : format(new Date(), "d");
console.log(day);

const dir = `${day}`;

const encoder = new TextEncoder();
const data = encoder.encode("export {}");

await Deno.mkdir(dir);
await Deno.create(`./${dir}/input.txt`);
await Deno.writeFile(`./${dir}/a.ts`, data);
await Deno.writeFile(`./${dir}/b.ts`, data);