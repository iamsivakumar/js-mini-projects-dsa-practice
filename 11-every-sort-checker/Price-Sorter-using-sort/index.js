const items = [
  { name: "Fan", price: 1200 },
  { name: "AC", price: 25000 },
  { name: "Cooler", price: 8000 },
  { name: "Bulb", price: 200 },
];

const sorted = items
  .sort((a, b) => a.price - b.price)
  .forEach((el) => console.log(`💸 ${el.name} - ₹${el.price}`));

// output;
// 💸 Bulb - ₹200
// 💸 Fan - ₹1200
// 💸 Cooler - ₹8000
// 💸 AC - ₹25000
