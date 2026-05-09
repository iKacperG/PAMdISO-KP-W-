const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const totalSpent = expenses.reduce((sum, expense) => sum + expense, 0);
const averageExpense = totalSpent / expenses.length;
const highestExpense = Math.max(...expenses);
const minorExpensesThreshold = 20;
const minorExpenses = expenses.filter((expense) => expense < minorExpensesThreshold).length;

function formatMoney(value) {
  return `${value.toFixed(2)} zł`;
}

console.log("Raport budżetu tygodniowego");
console.log(`Suma wydatków: ${formatMoney(totalSpent)}`);
console.log(`Średni wydatek: ${formatMoney(averageExpense)}`);
console.log(`Największy wydatek: ${formatMoney(highestExpense)}`);
console.log(`Liczba wydatków poniżej ${formatMoney(minorExpensesThreshold)}: ${minorExpenses}`);
// działa sumowanie, średnia i maksimum.
// dodano formatowanie kwot oraz licznik małych wydatków.
// najtrudniejsze było poprawne sformatowanie kwot.
