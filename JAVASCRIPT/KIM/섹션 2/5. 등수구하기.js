function solution(arr){  
    let n=arr.length;
    //1차원 배열 초기화
    let answer=Array.from({length:n}, ()=>1); // {length:n} -> answer 배열의 길이를 n으로 해라, ()=>1은 answer 배열을 1로 다 초기화 해라

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j] > arr[i]) answer[i]++;
        }
    }

    return answer;
}

let arr=[92, 89, 92, 100, 76];
console.log(solution(arr));