const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const hasStudentCard = true;
const dayType = "laboratorium";

let readinessMessage = "";

if (hasLaptop && hasNotebook && hasCharger && hasStudentCard) {
  readinessMessage = "Student ma przygotowane rzeczy potrzebne na zajęcia.";
} else {
  readinessMessage = "Student nie zabrał na zajęcia wszystkich potrzebnych rzeczy";
}

const readyStatus = hasLaptop && hasNotebook && hasCharger ? "gotowy" : "niegotowy";
const dayMessage = dayType === "laboratorium"
  ? "Na laboratorium należy pamiętać o zabraniu laptopa."
  : "Na wykład wystarczy zeszyt.";

console.log(readinessMessage);
console.log(`Status końcowy: ${readyStatus}`);
!hasCharger && console.log("Ostrzeżenie: brakuje ładowarki, więc bateria może nie wystarczyć.");
console.log(dayMessage);
hasLaptop && dayType === "laboratorium" && console.log("Zabrano laptopa");
// działa if else, operator trójargumentowy i warunek z podwójnym ampersandem.
// dodano kartę studenta.
// najtrudniejsze było poprawne zchainowanie warunków.
