const tasks = ["zajęcia", "zakupy", "trening"];
const secondUserTasks = ["powtórka materiału", "telefon do rodziny"];

function createDayPlan(name, tasks = ["odpoczynek", "spacer"]) {
  const numberedTasks = tasks.map((task, index) => `${index + 1}. ${task}`);
  return `Plan dnia dla ${name}:\n${numberedTasks.join("\n")}\nLiczba zadań: ${tasks.length}`;
}

function addMood(plan, mood = "spokojny") {
  return `${plan}\nNastrój dnia: ${mood}.`;
}

console.log(createDayPlan("Paweł", tasks));
console.log(addMood(createDayPlan("Piotr", secondUserTasks), "dobry humor"));
console.log(createDayPlan("Kasia"));
// Komentarz: dodano funkcję z parametrami z parametrami, użyto return oraz parametru domyślnego.
// Rozszerzenie: dodano numerowanie zadań i funkcję dodającą nastrój.
// Brak trudności.
// Kasia została dodana dla pokazania domyślnych parametrów