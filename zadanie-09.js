const cart = [
  { name: "Chleb", price: 4.5, quantity: 2, category: 'mączne' },
  { name: "Ser", price: 9.9, quantity: 1, category: 'nabiał' },
  { name: "Sok", price: 6.2, quantity: 3, category: 'nabiał'}
];

const discountThreshold = 30;
const discountPercent = 10;

function getBudgetFormat(value) {
  return `${value.toFixed(2)} zł`;
}

const cartLines = cart.map((item) => ({
  ...item,
  total: item.price * item.quantity,
  description: `${item.quantity}×${item.name} (${item.category})`,
}));

const cartTotal = cartLines.reduce((sum, item) => sum + item.total, 0);
const hasDiscount = cartTotal > discountThreshold;
const finalPrice = hasDiscount ? cartTotal * (1 - discountPercent / 100) : cartTotal;
const mostExpensivePosition = cartLines.reduce((maxItem, item) => (item.total > maxItem.total ? item : maxItem), cartLines[0]);

console.log("Koszyk");
console.log(`Pozycje:\n ${cartLines.map((item) => `${item.description} = ${item.total}zł`).join("\n")}`);
console.log(`Suma przed rabatem: ${getBudgetFormat(cartTotal)}`);
console.log(`Rabat: ${hasDiscount ? `${discountPercent}%` : "brak"}`);
console.log(`Suma po rabacie: ${getBudgetFormat(finalPrice)}`);
console.log(`Najdroższa pozycja: ${mostExpensivePosition.name} za ${getBudgetFormat(mostExpensivePosition.total)}`);
// użyto map() do sformatowania tekstu pozycji zakupowej,
// reduce() do sumy cen
// dodano kategorię oraz wskazanie najdroższej pozycji.
// najtrudniejsze było dodanie totala w środku mapowania pozycji.