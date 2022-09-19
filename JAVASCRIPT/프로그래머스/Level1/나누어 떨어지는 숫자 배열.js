function solution(arr, divisor) {
  var answer = [];
  
  answer = arr.filter(num => num % divisor === 0)
  answer.sort(function(a,b){return a-b})
  answer.length === 0 ?  answer = [-1] :  answer
  
  return answer;
}