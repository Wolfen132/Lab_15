
let people = new Worker("People", 200, 24);

console.log("Змінюємо кофіцієнт 1.2");
people.showSalary();
people.showSalaryWithExperience();

console.log("Змінюємо кофіцієнт 1.5");

people.experience = 1.5;
console.log(people.experience);

let people1 = new Worker("people1", 140, 16);

people1.showSalary();
people1.showSalaryWithExperience();

let people2 = new Worker("People2", 250, 30);

people2.showSalary();
people2.showSalaryWithExperience();

let people3 = new Worker("People3", 60, 10);

people3.showSalary();
people3.showSalaryWithExperience();