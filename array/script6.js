// Модифицируйте полученный выше код так,
// чтобы при отсутствии в массиве значения для месяца
// по умолчанию брался текущий месяц, а при отсутствии
// значения для года - соответственно текущий год.

function getDay() {
  return new Date().getDate();
}

function getMonth() {
  return new Date().getMonth() + 1;
}

function getYear() {
  return new Date().getFullYear();
}

let arr = [2022];
let [year = getYear(), month = getMonth(), day = getDay()] = arr;

console.log(year);
console.log(month);
console.log(day);