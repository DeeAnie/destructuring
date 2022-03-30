// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];

// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

func(["Иван", "Иванов", "отдел разработки"]);

function func([name, surname, department, position = "джуниор", salary]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position); // => джуниор
  console.log(salary); //=> undefined
}
