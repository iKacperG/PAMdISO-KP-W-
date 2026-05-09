const todos = [
  { id: 1, title: "Oddać projekt", done: false, priority: "wysoki" },
  { id: 2, title: "Przeczytać rozdział", done: true, priority: "średni" },
  { id: 3, title: "Przygotować prezentację", done: false, priority: "wysoki" },
];

function addTodo(currentTodos, title, priority = "niski") {
  const nextId = Math.max(...currentTodos.map((todo) => todo.id)) + 1;
  return [...currentTodos, { id: nextId, title, done: false, priority }];
}

function markAsDone(currentTodos, id) {
  return currentTodos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo));
}

function getOpenTodos(currentTodos) {
  return currentTodos.filter((todo) => !todo.done);
}

function formatTodos(currentTodos) {
  return currentTodos.map((todo) => `${todo.id}. ${todo.title} — ${todo.done ? "wykonane" : "niewykonane"}, priorytet: ${todo.priority}`);
}

const afterAdding = addTodo(todos, "Zrobić własną funkcję", "wysoki");
const afterDone = markAsDone(afterAdding, 1);
const openTodos = getOpenTodos(afterDone);

console.log("Wartości wejściowe:");
console.log(formatTodos(todos).join("\n"));
console.log("Po dodaniu wpisu:");
console.log(formatTodos(afterAdding).join("\n"));
console.log("Po oznaczeniu wpisu jako wykonane:");
console.log(formatTodos(afterDone).join("\n"));
console.log("Tylko niewykonane:");
console.log(formatTodos(openTodos).join("\n"));
// działają osobne funkcje dodawania, aktualizacji i filtrowania.
// dodano priorytet
// najtrudniejsze było dodawanie nowego id
