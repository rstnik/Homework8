let start = 10;
let end = 100;
let str = "";
let uah = 0;
for (let i = start; i <= end; i += 10) {
  uah = i * 27;
  str += uah + " ";
}
document.write(str);