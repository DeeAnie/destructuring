function func() {
  return ["Иван", "Иванов", "отдел разработки", "программист", 2000];
}

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

let [name, surname, department, position, salary] = func();

console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);