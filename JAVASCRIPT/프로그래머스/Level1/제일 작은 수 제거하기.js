function solution(arr) {
  var answer = [];

  if(arr.length === 1) return answer = [-1]

  const number = Math.min(...arr)
  const index = arr.indexOf(number)
  
  arr.splice(index, 1)    

  return answer = arr;
}