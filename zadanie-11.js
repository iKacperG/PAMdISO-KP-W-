const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
];

const totalTripCost = tripCosts.reduce((sum, cost) => sum + cost.amount, 0);
const paidByPerson = tripCosts.reduce((summary, cost) => ({
  ...summary,
  [cost.paidBy]: (summary[cost.paidBy] || 0) + cost.amount,
}), {});

const people = Object.keys(paidByPerson);
const topPayer = people.reduce((bestPerson, person) => (
  paidByPerson[person] > paidByPerson[bestPerson] ? person : bestPerson
), people[0]);
const equalShare = totalTripCost / people.length;
const settlements = people.map((person) => {
  const balance = paidByPerson[person] - equalShare;
  const action = balance >= 0 ? "do otrzymania" : "do oddania";
  return `${person}: ${action} ${Math.abs(balance).toFixed(2)} zł`;
});

console.log("Koszty wyjazdu");
console.log(`Całkowity koszt: ${totalTripCost.toFixed(2)} zł`);
console.log(`Najwięcej zapłacił/a: ${topPayer} (${paidByPerson[topPayer].toFixed(2)} zł)`);
console.log("Wydatki per osoba:", paidByPerson);
console.log(`Równy udział na osobę: ${equalShare.toFixed(2)} zł`);
console.log("Rozliczenie:");
console.log(settlements.join("\n"));
// użyto reduce()
// wskazano osobę która wydała najwięcej i rozliczenie pieniężne.
// dodano bilans oddać/otrzymać.
// przy zaokrągleniach do pełnych groszy pojawiły się różnice między oddanymi a otrzymanymi.