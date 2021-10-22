function solution(s){  
    //아스키 넘버로 풀기
    // let answer="";
    // for(let x of s){
    //     let num = x.charCodeAt();
    //     if(num>=65 && num<=90){ //대문자 -> 소문자
    //         answer+=x.toLowerCase();
    //     }
    //     else answer+=x.toUpperCase(); //소문자 -> 대문자
    // }

    //일반적으로 풀기
    let answer = "";
    for(let x of s){
        if(x === x.toUpperCase()) answer+=x.toLowerCase();// 대문자->소문자
        else answer+=x.toUpperCase();//소문자->대문자
    }

    return answer;
}

console.log(solution("StuDY"));