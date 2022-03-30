let options = {
  width: 400,
  height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;

let { width: w, height: h, color: c = "black" } = options;
console.log(c);
console.log(w);
console.log(h);