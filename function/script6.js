// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;

// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

func({ width: 400, height: 500 });

function func({ color = "black", width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}