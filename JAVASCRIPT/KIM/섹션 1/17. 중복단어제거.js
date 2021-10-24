function solution(s){  
    let answer;
    
    // filter로 true일때만 단어들을 배열로 만들어서 answer로 보냄
    answer = s.filter(function(v,i){
        // if(s.indexOf(v)===i) return true;
        return s.indexOf(v)===i; //참 일때만 v를 return함
    });
    
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));