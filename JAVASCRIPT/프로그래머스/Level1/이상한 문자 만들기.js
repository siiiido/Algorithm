function solution(s) {
  let x = s.split(" ");
  var answer = [];

  for (let i = 0; i < x.length; i++) {
    answer.push(
      x[i]
        .split("")
        .map((cur, j) => (j % 2 ? cur.toLowerCase() : cur.toUpperCase()))
        .join("")
    );
  }

  return answer.join(" ");
}
