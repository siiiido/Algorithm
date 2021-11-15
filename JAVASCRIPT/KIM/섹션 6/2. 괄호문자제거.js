function solution(s){  
    let answer ;
    let stack = [];

    for(let x of s){
        if(x === ')' ){
            // stack에서 '('를 만날 때 까지 계속 pop
            // '(' 만나면 while 빠져 나옴
            while(stack.pop() !== '(');
        }
        else stack.push(x);
    }

    answer = stack.join('');
    
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));