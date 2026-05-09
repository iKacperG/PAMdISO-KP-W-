const user = {
  firstName: "Kacper",
  lastName: "Górski",
  city: "Zawiercie",
  age: 30,
  fieldOfStudy: "informatyka",
};

user.favoriteProgrammingLanguage = "TypeScript";
user.hobby = "gra na gitarze";

const fullName = `${user.firstName} ${user.lastName}`;
const adultStatus = user.age >= 18 ? "pełnoletni" : "niepełnoletni";
const studyDescription = `${fullName} mieszka w: ${user.city} i studiuje kierunek: ${user.fieldOfStudy}.`;

function getAdditionalMessage(person) {
  return `${person.firstName} z języków programowania najbardziej lubi: ${person.favoriteProgrammingLanguage}, a poza programowaniem jego hobby jest: ${person.hobby}.`;
}

console.log(`Imię i nazwisko: ${fullName}`);
console.log(studyDescription);
console.log(`${user.firstName} ma ${user.age} lat, co znaczy, że jest ${adultStatus}.`);
console.log(getAdditionalMessage(user));
