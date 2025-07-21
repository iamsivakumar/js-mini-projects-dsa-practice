const products = [
  { name: "Laptop", price: 60000 },
  { name: "Smartphone", price: 25000 },
  { name: "Headphones", price: 3000 },
  { name: "Monitor", price: 12000 },
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "Smartwatch", price: 7000 },
  { name: "Pen", price: 50 },
];

const discounted = products
  .filter((product) => product.price > 1000)
  .map((product) => {
    const { price, name } = product;
    const discountPrice = price * 0.1;
    const totalPrice = price - discountPrice;
    return `💰 ${name} - ${totalPrice.toFixed(2)} (10% OFF)`;
  });
console.log("🛍️ Discounted Products:");
discounted.forEach((item) => console.log(item));

// output 🛍️ Discounted Products:
// 💰 Laptop - ₹54000.00 (10% OFF)
// 💰 Smartphone - ₹22500.00 (10% OFF)
// 💰 Headphones - ₹2700.00 (10% OFF)
// 💰 Monitor - ₹10800.00 (10% OFF)
// 💰 Keyboard - ₹1350.00 (10% OFF)
// 💰 Smartwatch - ₹6300.00 (10% OFF)
