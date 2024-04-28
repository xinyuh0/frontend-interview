function bestClosingTime(customers: string): number {
  const left: number[] = new Array(customers.length + 1).fill(0);
  const right: number[] = new Array(customers.length + 1).fill(0);

  for (let i = 1; i < customers.length + 1; i++) {
    if (customers[i - 1] === "N") {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = left[i - 1];
    }
  }

  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i] === "Y") {
      right[i] = right[i + 1] + 1;
    } else {
      right[i] = right[i + 1];
    }
  }

  let minPenalty = Number.MAX_SAFE_INTEGER;
  let closeHour = -1;

  for (let i = 0; i < customers.length + 1; i++) {
    let penalty = left[i] + right[i];

    if (penalty < minPenalty) {
      minPenalty = penalty;
      closeHour = i;
    }
  }

  return closeHour;
}

console.log(bestClosingTime("YYYY"));
