let arr = ["Иван", "Иванов", "отдел разработки", "программист"];
// let arr = ["Иван", "Иванов", "отдел разработки"];  // => джуниор

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }

let [name, surname, department, position = "джуниор"] = arr;
// let [name, surname, department, position ] = arr;   // => undefined // при нехватке элементов в массиве происходит ошибка
console.log(name);
console.log(surname);
console.log(department);
console.log(position); // => программист
