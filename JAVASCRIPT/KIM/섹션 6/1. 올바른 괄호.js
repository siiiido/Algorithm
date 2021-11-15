function solution(s){
    let answer="YES";
    let stack = [];

    for(let x of s){
        if(x === "(" ) stack.push(x);
        else {
            //   ")"이 들어왔는데 짝이 없을 때
            if(stack.length === 0) return "N0";
            stack.pop()
        }
    }

    if(stack.length > 0) return "NO";
    
    return answer;
}

let a="(()(()))(()";
// let a="()";
console.log(solution(a));