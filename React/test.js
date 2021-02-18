class Human {
    gender = 'male';

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = "Max";
    gender = "Female"

    printmyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printmyName();
person.printGender();

const numbers = [1, 2, 3];
[num1, num3] = numbers;
console.log(num1, num3);