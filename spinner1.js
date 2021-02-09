process.stdout.write('hello from spinner1.js... \rheyyy\n');

//animate using \r to replace characters in the same spot after a delay

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 500);

setTimeout(() => {
  //escape the backslash since it's a special character
  process.stdout.write('\r\\   ')
}, 700);

setTimeout(() => {
  //escape the backslash since it's a special character
  process.stdout.write('\r|   ')
}, 900);

setTimeout(() => {
  //escape the backslash since it's a special character
  process.stdout.write('\r/   ')
}, 1100);

setTimeout(() => {
  //escape the backslash since it's a special character
  process.stdout.write('\r-   ')
}, 1300);

setTimeout(() => {
  //escape the backslash since it's a special character
  process.stdout.write('\r\\   ')
}, 1500);