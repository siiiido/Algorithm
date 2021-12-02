function solution(need, plan){
    let answer="YES";
    let queue = need.split('');
    
    for(let x of plan){
        // x가 있으니 필수 과목
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO";
        }
    }
    if(queue.length>0) return "NO";

    console.log(queue); // 빈 객체(다 빠져 나감)

    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));