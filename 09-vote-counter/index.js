const votes = ["yes", "no", "yes", "no", "yes", "yes", "no"];

const result = votes.reduce(
  (acc, curr) => {
    if (curr === "yes") {
      acc.yes++;
    } else if (curr === "no") {
      acc.no++;
    }
    return acc;
  },
  { yes: 0, no: 0 }
);

console.log(result);

// output;
// { yes: 4, no: 3 }
