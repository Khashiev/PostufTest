let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange2 = [null, 200];
// let requiredRange1 = [null, 200];
// let requiredRange3 = [200, null];

// filterCources(requiredRange2, courses);
// sortCources(courses)

function filterCources(minMax, arr) {
  minMax[0] = minMax[0] === null ? 0 : minMax[0];
  minMax[1] = minMax[1] === null ? Infinity : minMax[1];

  return arr.filter((item) => {
    item.prices[0] = item.prices[0] === null ? 0 : item.prices[0];
    item.prices[1] = item.prices[1] === null ? Infinity : item.prices[1];

    return item.prices[0] >= minMax[0] && item.prices[1] <= minMax[1];
  });
}

function sortCources(arr) {
  return arr.sort((a, b) => a.prices[0] - b.prices[0]);
}
