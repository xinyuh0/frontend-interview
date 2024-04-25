function countStudents(students: number[], sandwiches: number[]): number {
  // Number of continuous students that changes the order
  let cnt = 0;
  while (students.length) {
    let student = students.shift() as number;
    let sandwich = sandwiches[0];

    if (student === sandwich) {
      sandwiches.shift();
      cnt = 0;
    } else {
      students.push(student);
      cnt++;
    }

    if (cnt === students.length) break;
  }

  return students.length;
}

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
