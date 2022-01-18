let string = [
  "\r| ",
  "\r/ ",
  "\r- ",
  "\r\\ ",
  "\r| ",
  "\r/ ",
  "\r- ",
  "\r\\ ",
  "\r| ",
  "\n",
];
let timer = 1000;

for (const item of string) {
  // console.log(item);
  setTimeout(() => {
    process.stdout.write(item);
    return;
  }, timer);
  timer += 100;
}
