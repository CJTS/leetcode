/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
let dp = [];

var minMovesToSeatDP = function (seats, students) {
  var min = Infinity;

  if (dp[seats.join(',') + '|' + students.join(',')]) {
    return dp[seats.join(',') + '|' + students.join(',')];
  }

  if (seats.length === 1) {
    return Math.abs(students[0] - seats[0]);
  }

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    for (let j = 0; j < seats.length; j++) {
      const seat = seats[j];
      var cost = Math.abs(student - seat);
      const newStudent = [...students];
      newStudent.splice(i, 1);
      const newSeat = [...seats];
      newSeat.splice(j, 1);
      cost += minMovesToSeatDP(newStudent, newSeat);
    }

    if (min > cost) {
      min = cost;
    }
  }

  dp[seats.join(',') + '|' + students.join(',')] = min;

  return min;
};

var minMovesToSeatGreedy = function (seats, students) {
  seats.sort((a, b) => {
    return a - b;
  });

  students.sort((a, b) => {
    return a - b;
  });

  var totalCost = 0;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const seat = seats[i];

    totalCost += Math.abs(student - seat);
  }

  return totalCost;
};

console.log(minMovesToSeatGreedy([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]));
