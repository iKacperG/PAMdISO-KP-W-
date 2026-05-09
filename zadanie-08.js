const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const passThreshold = 3.0;

function getDescriptiveAssessment(average) {
  if (average >= 4.75) {
    return "bardzo dobry";
  }
  if (average >= 4.0) {
    return "dobry";
  }
  if (average >= passThreshold) {
    return "dostateczny";
  }
  return "do poprawy";
}

function summarizegrades(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;
  const status = average >= passThreshold ? "zaliczone" : "niezaliczone";
  return {
    average: Number(average.toFixed(2)),
    status,
    assessment: getDescriptiveAssessment(average),
    bestGrade: Math.max(...grades),
  };
}

const gradeReport = summarizegrades(grades);

console.log("Wynik:", gradeReport);
console.log(`Średnia: ${gradeReport.average}`);
console.log(`Status: ${gradeReport.status}`);
console.log(`Klasyfikacja opisowa: ${gradeReport.assessment}`);
console.log(`Najwyższa ocena: ${gradeReport.bestGrade}`);
// użyto reduce(),
// użyto funkcji zwracającej obiekt i operatora trójargumentowego dla statusu.
// dodano klasyfikację opisową oraz najlepszą ocenę.
// najtrudniejsze było poprawne wyświetlenie pełnego raportu w polu Wynik;
