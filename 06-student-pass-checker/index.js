let students = [
  { name: "Siva", marks: 85, passed: true },
  { name: "Ravi", marks: 48, passed: false },
  { name: "Anu", marks: 77, passed: true },
  { name: "meenu", marks: 73, passed: true },
];

for (let i = 0; i < students.length; i++) {
  const passed = students[i].passed;
  if (passed) {
    console.log(
      `🎓 ${students[i].name} - Marks: ${students[i].marks} - ✅ Passed `
    );
  }
}
