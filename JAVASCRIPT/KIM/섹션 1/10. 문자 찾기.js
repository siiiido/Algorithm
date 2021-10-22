function solution(s, t){
    // split 안쓴 버전
    
    // let answer=0;

    // for(let x of s){
    //     if(x === t) answer++;
    // }

    //split으로 풀기
    let answer = s;
    answer = s.split('R').length-1; //R이 3개니깐 4등분으로 나눠지니 -1 해줘야함, R이 맨 끝에 있어도 빈 문자열이 있기 때문에 동일

    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));