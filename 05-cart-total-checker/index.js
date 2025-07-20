let cart = [
  { name: "Apple", price: 30, inStock: false },
  { name: "Milk", price: 25, inStock: true },
  { name: "Soap", price: 15, inStock: true },
  { name: "Bread", price: 20, inStock: true },
];
let total = 0;
let hasStock = false;
for (let i = 0; i < cart.length; i++) {
  if (cart[i].inStock) {
    hasStock = true;
    total += cart[i].price;
    console.log(`🛒 ${cart[i].name} - ${cart[i].price} `);
  }
}
if (!hasStock) {
  console.log("⚠️ No items in stock.");
} else {
  console.log(`🧾 Total: ${total}`);
}
