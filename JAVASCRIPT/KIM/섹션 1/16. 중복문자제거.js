function solution(s){  
    // let answer="";
    
    // for(let i=0; i<s.length; i++){
        // console.log(s[i], i, s.indexOf(s[i]));
    //     if(s.indexOf(s[i]) === i) answer+=s[i];
    // }


    // 특정문자 갯수 찾기
    let answer = 0;
    let pos = s.indexOf('k');
    while(pos!==-1){ //못찾으면 -1출력
        answer++;
        pos=s.indexOf('k',pos+1);
    }


    return answer;
}
console.log(solution("ksekkset"));