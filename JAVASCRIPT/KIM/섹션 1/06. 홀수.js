function solution(arr){
    let answer=[];
    let sum = 0, min=Number.MAX_SAFE_INTEGER; // 최솟값 초기화 설정 할 때 이렇게 하기
    
    for(let x of arr){
        if(x % 2 === 1){
            sum += x;
            if(x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);

    return answer;

}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));