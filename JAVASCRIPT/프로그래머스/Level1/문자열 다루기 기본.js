function solution(s) {
  var answer = true;
  let pattern = /[a-zA-Z]/
  if(s.length !== 4 && s.length !== 6){
      return answer = false
  }else if(pattern.test(s)){
      return answer = false
  }
  return answer;
}