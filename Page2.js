var subjects = ["English", "Urdu", "Mathematics", "Science", "Social Studies", "Art"];
var marks = [];
var totalMarks = 0;
var grade;
var result = "\n";
for (i = 0; i < subjects.length; i++) {
    marks[i] = prompt("Enter Marks for " + subjects[i] + " out of 100:");
    totalMarks = totalMarks + Number(marks[i]);
}

var percent = totalMarks * 100 / 600;

if (percent >= 80) {
    grade = "A+";
} else if (percent >= 70 && percent < 80) {
    grade = "A";
} else if (percent >= 60 && percent < 70) {
    grade = "B";
} else if (percent >= 50 && percent < 60) {
    grade = "C";
} else if (percent >= 40 && percent < 50) {
    grade = "D";
}else {
    grade = "F";
}

if (percent >= 90) {
    for (j = 0; j < subjects.length; j++) {
        result = result + (subjects[j] + " : " + marks[j] + "/100\n");
    }
    result = result + "Grade: " + grade + "\nPercentage: " + percent + "\n\nYou are eligible for scholarship";
} else {
    for (j = 0; j < subjects.length; j++) {
        result = result + (subjects[j] + " : " + marks[j] + "/100\n");
    }
    result = result + "Grade: " + grade + "\nPercentage: " + percent;
}
alert(result);