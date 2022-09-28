function solution(d, budget) {
  var answer = 0;
  let count = 0;
  let sum = 0;

  d = d.sort((a, b) => a - b);

  while (sum <= budget) {
    sum += d[count];
    count++;
  }

  return (answer = count - 1);
}
