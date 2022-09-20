function solution(s) {
  var answer = '';
  const mid = Math.floor(s.length/2)
  
  return s.length %2 === 1 ? answer = s[mid] : s[mid-1] + s[mid]
}