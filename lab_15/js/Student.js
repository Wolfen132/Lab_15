

class Student extends Person {
    constructor(name, surname, midlleName, year) {
        super(name, surname);
        this.year = year;
        this.midlleName = midlleName;
    }
    showFullName() {
        console.log(this.name + '', this.surname, this.midlleName);
    }

    showCourse() {

        let currentYear = 2023;

        let result = currentYear - this.year;

        if (result > 6) {
            console.log("Випускник");
        } else {
            console.log(result);
        }
    }
}