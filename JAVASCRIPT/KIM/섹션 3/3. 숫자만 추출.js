function solution(str){
    //parseInt() 쓸 수 있을 때
    // let answer="";

    // for(let x of str){
    //     // isNaN : 숫자이면 false, 숫자가 아니면 true를 return하는 메서드
    //     if(!isNaN(x)) answer+=x;
    // }
    
    // return parseInt(answer);


    //parseInt() 쓸 수 없을 때
    let answer=0;

    for(let x of str){
        // isNaN : 숫자이면 false, 숫자가 아니면 true를 return하는 메서드
        if(!isNaN(x)) answer = answer*10 + Number(x);
    }
    
    return answer;
}

let str="g0en2T0s8eSoft";
console.log(solution(str));