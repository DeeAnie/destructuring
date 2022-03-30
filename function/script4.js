// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];

// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

func("отдел разработки", ["Иван", "Иванов"], [2018, 12, 31]);

function func(department, [name, surname], [year, month, day]) {
  console.log(department);
  console.log(name);
  console.log(surname);
  console.log(year);
  console.log(month);
  console.log(day);
}