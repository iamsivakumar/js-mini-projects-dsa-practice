let students = [
  { name: "Siva", marks: 85 },
  { name: "Ravi", marks: 45 },
  { name: "Anu", marks: 92 },
  { name: "Mani", marks: 74 },
  { name: "Deepa", marks: 50 },
];

for (let i = 0; i < students.length; i++) {
  const stdId = students[i];
  if (stdId.marks >= 90) {
    console.log(`📘 ${stdId.name} - ${stdId.marks} marks - Grade: A🔥`);
  } else if (stdId.marks >= 75) {
    console.log(`📘 ${stdId.name} - ${stdId.marks} marks - Grade: B💪`);
  } else if (stdId.marks >= 50) {
    console.log(`📘 ${stdId.name} - ${stdId.marks} marks - Grade: C✅`);
  } else {
    console.log(`📘 ${stdId.name} - ${stdId.marks} marks - Grade: F❌`);
  }
}
