/* const employee= {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun1 = {
    salary : 60000,
    calcTax () {
        console.log("tax rate is 20%");
    },
};

karanArjun1.__proto__=employee;
 */

/* class ToyotaCar {
    constructor(brand,mileage) {
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }


setBrand(brand) {
    this.brandName= brand;
}
};

let fortuner= new ToyotaCar("fortuner",10);
console.log(fortuner);
//fortuner.setBrand("fortuner");

let lexus= new ToyotaCar("lexus",20);
console.log(lexus); */

class Person {
    constructor(name) {
        this.species="homo sapiens";
        this.name=name;
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}


class Engineer extends Person{
    /* constructor(branch) {
        super();
        this.branch=branch;
    } */
    constructor(name) {
        super(name);
    }
    work() {
        super.eat();
        console.log("build things, solve problems");
    }
}

//let Obj= new Engineer("Mechanical engineering");
let Obj= new Engineer("Raj");


