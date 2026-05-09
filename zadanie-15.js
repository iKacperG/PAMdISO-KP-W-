const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false, teacher: "dr Nowak" },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true, teacher: "mgr Foo" },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false, teacher: "dr Buzz" },
  { day: "piątek", subject: "UX", room: "online", online: true, teacher: "mgr Bar" },
  { day: "poniedziałek", subject: "Matematyka", room: "C01", online: false, teacher: "prof. Doe" },
];

function getClassesForDay(weeklySchedule, day) {
  return weeklySchedule.filter((lesson) => lesson.day.toLowerCase() === day.toLowerCase());
}

function describeClasses(classes) {
  return classes.map((lesson) => {
    const mode = lesson.online ? "online" : "stacjonarne";
    return `${lesson.subject} — sala: ${lesson.room} — tryb: ${mode} — prowadzący: ${lesson.teacher}`;
  });
}

function getClassesByMode(weeklySchedule, onlineMode) {
  return weeklySchedule.filter((lesson) => lesson.online === onlineMode);
}

const selectedDay = "poniedziałek";
const mondayClasses = getClassesForDay(schedule, selectedDay);
const onlineClasses = getClassesByMode(schedule, true);

console.log(`Zajęcia w dzień: ${selectedDay}`);
console.log(describeClasses(mondayClasses).join("\n"));
console.log(`Liczba zajęć: ${schedule.length}`);
console.log("Zajęcia online:");
console.log(describeClasses(onlineClasses).join("\n"));
// działa filtrowanie po dniu, mapowanie opisów i warunek online/stacjonarne.
// dodano prowadzącego oraz filtrowanie według trybu zajęć.
// najtrudniejsze było zbudować poprawny template string dla funkcji describeClasses.
