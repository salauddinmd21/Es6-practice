class Student {
    constructor (sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "B H S School";
    }

}

const student1 = new Student (12, 'salauddin');
const student2 = new Student (123, 'Kamla');
console.log(student1, student2);