function solution(seoul) {
  var answer = '';
  const findKim = (item) => item === 'Kim'
  let index = seoul.findIndex(findKim)
  
  answer = `김서방은 ${index}에 있다`
  
  return answer;
}