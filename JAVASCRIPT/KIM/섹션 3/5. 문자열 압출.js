function solution(s){
    let answer="";
    let cnt = 1;
    s = s + " "; // 마지막에 빈 문자 넣으면 카운트하기 수월하다.

    for(let i=0; i<s.length-1; i++){
        if(s[i] === s[i+1]) cnt++;
        else{
            answer+=s[i];
            if(cnt > 1) answer+=String(cnt);
            cnt=1;
        }
    }

    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));