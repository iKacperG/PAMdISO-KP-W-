const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true, category: 'mączne' },
  { name: "mleko", quantity: 1, urgent: false, category: 'nabiał' },
  { name: "jajka", quantity: 10, urgent: true, category: 'nabiał' },
  { name: "makaron", quantity: 3, urgent: false, category: 'mączne' }
];

const shoppingsDescriptions = shoppingList.map((item) => `${item.name} — ilość: ${item.quantity}, kategoria: ${item.category}`);
const urgentshoppingList = shoppingList.filter((item) => item.urgent);
const upperCaseNames = shoppingList.map((item) => item.name.toUpperCase());

console.log("Wszystkie produkty:");
console.log(shoppingsDescriptions.join("\n"));
console.log(`Liczba pilnych pozycji: ${urgentshoppingList.length}`);
console.log(`Nazwy wielkimi literami:\n ${upperCaseNames.join("\n")}`);
