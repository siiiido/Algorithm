function solution(s){  
    let answer;

    //substr()
    // let mid = Math.floor(s.length/2);
    // if(s.length % 2 === 1 ) answer = s.substr(mid,1); //홀수
    // else answer = s.substr(mid-1, 2);

    //substring()
    let mid = Math.floor(s.length / 2);
    if(s.length % 2 === 1) answer = s.substring(mid, mid+1);//홀수
    else answer = s.substring(mid-1, mid+1);//짝수

    return answer;
}
console.log(solution("good"));