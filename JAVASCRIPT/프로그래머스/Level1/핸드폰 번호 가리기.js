function solution(phone_number) {
  var answer = '';
  
  if(phone_number.length === 4){
      answer = phone_number
  }else{
      let lastNum = phone_number.substring(phone_number.length - 4)
      for(let i=0; i<phone_number.length-4; i++){
          answer+='*'
      }
      answer+=lastNum
  }
  return answer;
}