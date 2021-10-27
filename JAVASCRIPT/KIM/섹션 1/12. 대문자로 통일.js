function solution(s){
    let answer="";

    for(let x of s){
        // 일반적인 방법
        if(x === x.toLowerCase()) answer+=x.toUpperCase();
        else answer+=x; 
    }

    //아스키 넘버 사용하기
    // for(let x of s){
    //     let num = x.charCodeAt();
    //     if(num>=97 && num<=122) answer+=String.fromCharCode(num-32); // 소문자 -> 대문자 : num-32   //   대문자 -> 소문자 : num + 32
    //     else answer+=x;
    // }

    return answer;

}

let str="ItisTimeToStudy";
console.log(solution(str));