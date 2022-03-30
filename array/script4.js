let arr = ["Иван", "Иванов", "отдел разработки", "программист", 2000];

// let name    = arr[0];
// let surname = arr[1];
// let info = arr.slice(2); // все элементы со второго до конца массива

let [name, surname, ...info] = arr;
console.log(name);
console.log(surname);
console.log(info);
