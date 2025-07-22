const students = [
  { name: "Arun", marks: 40 },
  { name: "Priya", marks: 55 },
  { name: "Rahul", marks: 38 },
  { name: "Divya", marks: 60 },
];

const passed = students.every((std) => std.marks > 35);

console.log(`📘 All Passed: ${passed}`);

// output
// 📘 All Passed: true
