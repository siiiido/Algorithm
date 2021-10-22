function solution(s){
    //replace 안쓰고도 가능
    // let answer="";
    
    // for(let x of s){
    //     if(x === "A") answer+="#";
    //     else answer+=x;
    // }


    // replace 사용
    let answer = s; //값만 복사함, 주소 복사 안함
    // answer = answer.replace(/A/, '#'); // 정규표현식
    answer = answer.replace(/A/g, '#'); // 정규표현식

    return answer;
}

let str="BANANA";
console.log(solution(str));