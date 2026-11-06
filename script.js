// ======================================
// Student Management System
// ======================================

// 1. Student Class
class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        const total = this.grades.reduce(
            (sum, grade) => sum + grade, 0
        );

        return total / this.grades.length;
    }

    // 3. Get Grade
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Get Final Result
    getFinalResult() {
        const average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 5. Create Students List
const studentsList = [

    new Student(101, "Youssef", [92, 88, 95], 90),

    new Student(102, "Reem", [44, 48, 41], 82),

    new Student(103, "Ziad", [78, 82, 80], 88),

    new Student(104, "Nour", [45, 47, 49], 79)

];

// 6. Filter Struggling Students
const strugglingStudents = studentsList.filter(student => {

    const average = student.calculateAverage();

    return average >= 40 && average <= 49;

});

// 7. Add 5 Grace Marks using map
const adjustedStrugglingStudents = strugglingStudents.map(student => {

    const oldAverage = student.calculateAverage();

    const newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: Number(oldAverage.toFixed(2)),
        newAverage: Number(newAverage.toFixed(2))
    };

});

// 8. Calculate Total using reduce
const totalNewAverages = adjustedStrugglingStudents.reduce(
    (sum, student) => sum + student.newAverage,
    0
);

// 9. Calculate Grace Average
let leniencyAverage = 0;

if (adjustedStrugglingStudents.length > 0) {

    leniencyAverage =
        totalNewAverages / adjustedStrugglingStudents.length;

}

// 10. Print Students Report
console.log("====================================");
console.log("       STUDENTS REPORT");
console.log("====================================");

studentsList.forEach(student => {

    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage().toFixed(2));
    console.log("Grade:", student.getGrade());
    console.log("Result:", student.getFinalResult());

    console.log("--------------------------------");

});

// 11. Print Grace Committee Report
console.log("====================================");
console.log("       GRACE COMMITTEE REPORT");
console.log("====================================");

if (adjustedStrugglingStudents.length > 0) {

    console.table(adjustedStrugglingStudents);

} else {

    console.log("No struggling students found.");

}

// 12. Print Grace Average
console.log("====================================");

if (adjustedStrugglingStudents.length > 0) {

    console.log(
        "Average After Grace:",
        leniencyAverage.toFixed(2)
    );

} else {

    console.log("No students need grace marks.");

}

console.log("====================================");
console.log("       END OF REPORT");
console.log("====================================");
