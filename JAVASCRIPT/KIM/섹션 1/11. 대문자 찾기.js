function solution(s){         
    let answer=0;

    for(let x of s){
        //일반적인 풀이법
        // if(x === x.toUpperCase()) answer++

        // 아스키 넘버로 풀기
        let num = x.charCodeAt();
        if(num >= 65 && num<=90) answer++;
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));