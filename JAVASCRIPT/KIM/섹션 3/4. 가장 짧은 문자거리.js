function solution(s, t){
    let answer=[];
    let p = 1000;

    // case1 왼쪽에서 부터의 거리 구하기
    for(let x of s){
        if(x === t){
            p=0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }

    p=1000; // 초기화

    //case2 오른쪽에서 부터의 거리 구하기
    for(let i=s.length-1; i>=0; i--){
        if(s[i] === t){
            p=0;
        }
        else{
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));