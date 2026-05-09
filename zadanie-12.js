const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
];

function findByCity(contactsBook, city) {
  return contactsBook.filter((contact) => contact.city.toLowerCase() === city.toLowerCase());
}

function findFavorites(contactsBook) {
  return contactsBook.filter((contact) => contact.favorite);
}

function formatContacts(contactsBook) {
  return contactsBook.map((contact) => `${contact.name} — ${contact.phone}`);
}

function searchByNetwork(contactsBook, text) {
  const prefix = Number(text);

  return contactsBook.filter((contact) => {
    const phoneDigits = contact.phone.replace(/\D/g, "");
    const firstThreeDigits = Number(phoneDigits.slice(0, 3));

    return firstThreeDigits >= prefix && firstThreeDigits <= prefix + 99;
  });
}

console.log("Kontakty z Katowic:");
console.log(formatContacts(findByCity(contacts, "Katowice")).join("\n"));
console.log("Kontakty z Sosnowca:");
console.log(formatContacts(findByCity(contacts, "Sosnowiec")).join("\n"));
console.log("Ulubione kontakty:");
console.log(formatContacts(findFavorites(contacts)).join("\n"));
console.log("Wyszukiwanie osób z jednej sieci sieci po początku numeru telefonu:");
console.log(formatContacts(searchByNetwork(contacts, "500")).join("\n"));
// dodano funkcje pomocnicze, filter() oraz map().
// dodano wyszukiwanie po sieci.
// najtrudniejsze było zrobienie poprawnego regexa.