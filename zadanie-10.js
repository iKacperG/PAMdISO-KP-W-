const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 }
];

const totalMinutes = activities.reduce((sum, activity) => sum + activity.minutes, 0);
const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0);
const longerActivities = activities.filter((activity) => activity.minutes > 30);
const mostCaloricActivity = activities.reduce((best, activity) => (activity.calories > best.calories ? activity : best), activities[0]);
const averageCaloriesPerMinute = totalCalories / totalMinutes;

console.log("Aktywność sportowa");
console.log(`Łączny czas: ${totalMinutes} minut.`);
console.log(`Spalone kalorie: ${totalCalories} kcal.`);
console.log(`Aktywności dłuższe niż 30 minut: ${longerActivities.map((activity) => activity.type).join(", ")}.`);
console.log(`Najbardziej kaloryczny trening: ${mostCaloricActivity.type}, ${mostCaloricActivity.calories} kcal.`);
console.log(`Średnie spalanie: ${averageCaloriesPerMinute.toFixed(2)} kcal/min.`);
// użyty filter() i reduce()
// template literals użyte do zaraportowania o średnim spalaniu
// dodano średnie spalanie na minutę.
// najtrudniejsze było wyciagnięcie najbardziej kalorycznej aktywności.
