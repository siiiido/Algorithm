function solution(n, m) {
  var answer = [];

  let lmc = m * n;

  while (n) {
    let tmp = n;
    n = m % n;
    m = tmp;
  }

  answer.push(m);
  answer.push(Math.floor(lmc / m));

  return answer;
}
