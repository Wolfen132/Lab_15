
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #expirience = 1.2;

    set experience(value) {
        this.#expirience = value;
    }

    get experience() {
        return this.#expirience;
    }
    
    showSalary() {
        let res = this.dayRate * this.workingDays;
        console.log(this.fullName, '= ' + res);
    }

    showSalaryWithExperience() {
        let res = this.dayRate * this.workingDays;
        let resWithExp = this.#expirience * res;
        console.log(this.fullName + " =", resWithExp);
    }
}