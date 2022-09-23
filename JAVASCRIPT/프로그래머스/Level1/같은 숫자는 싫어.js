function solution(arr) {
  var answer = [];

  while (arr.length > 0) {
    let firstElement = arr.shift();
    if (answer[answer.length - 1] !== firstElement) {
      answer.push(firstElement);
    }
  }

  return answer;
}
