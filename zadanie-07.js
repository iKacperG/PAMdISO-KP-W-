const repairs = [
  { id: 1, client: "Paweł", device: "laptop", status: "nowe", priority: 'niski' },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie", priority: 'wysoki' },
  { id: 3, client: "Marta", device: "tablet", status: "zakończone", priority: 'wysoki' }
];

const searchedId = 1;
const foundTicket = repairs.find((ticket) => ticket.id === searchedId);

function changeTicketStatus(tickets, id, nextStatus) {
  return tickets.map((ticket) => (
    ticket.id === id ? { ...ticket, status: nextStatus, updatedAt: "2026-05-09" } : ticket
  ));
}

const updatedTickets = changeTicketStatus(repairs, searchedId, "w trakcie");
const activeTicketsCount = updatedTickets.filter((ticket) => ticket.status === "w trakcie").length;
const highPriorityActive = updatedTickets.filter((ticket) => ticket.status === "w trakcie" && ticket.priority === "wysoki");

console.log("Znalezione zgłoszenie:", foundTicket);
console.log("Oryginalna tablica:", repairs);
console.log("Zaktualizowana tablica:", updatedTickets);
console.log(`Liczba zgłoszeń w toku: ${activeTicketsCount}`);
console.log(`Pilne zgłoszenia w toku: ${highPriorityActive.map((ticket) => ticket.client).join(", ")}`);
// działa find(),
// niemutowalna aktualizacja przez map() i spread operator
// dodane liczenie zgłoszeń w toku.
// dodano priorytet i datę aktualizacji.
// najtrudniejsze było pokazanie różnicy bez zmiany oryginalnej tablicy.
