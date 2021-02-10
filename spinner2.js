//refectoring spinner 1

const line = ['|/-\\'];
let delay = 100;

for (const position of line[0]) {
  setTimeout(() => {
    process.stdout.write(`\r${position}   `)
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);