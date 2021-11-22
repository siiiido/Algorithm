function solution(s){  
    let answer;
    let stack = [];

    for(let x of s){
        //숫자일 때 push
        if(!isNaN(x)){
            console.log(x); // 3 5 2 9
            stack.push(Number(x));
        } 
        else{
            let rt = stack.pop();
            let lt = stack.pop();
            if(x === '+') stack.push(lt + rt);
            else if(x === '-') stack.push(lt - rt);
            else if(x === '*') stack.push(lt * rt);
            else if(x === '/') stack.push(lt / rt);
        }
    }
   
    return answer;
}

let str="352+*9-";
console.log(solution(str));