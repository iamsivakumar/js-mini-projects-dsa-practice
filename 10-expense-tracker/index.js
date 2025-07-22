const expenses = [
  { item: "Groceries", amount: 1500 },
  { item: "Electricity Bill", amount: 2300 },
  { item: "Internet", amount: 999 },
  { item: "Fuel", amount: 1200 },
  { item: "Gym", amount: 600 },
];

expenses.forEach((el) => console.log(`${el.item} - ${el.amount}`));

const totalExp = expenses.reduce((acc, curr) => acc + curr.amount, 0);

console.log(`🧾 Total Monthly Expense: ₹${totalExp}`);

// Output Example:
// Groceries - 1500
// Electricity Bill - 2300
// Internet - 999
// Fuel - 1200
// Gym - 600
// 🧾 Total Monthly Expense: ₹6599
