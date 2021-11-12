function solution(k, arr){
    let answer, sum=0;

    //내가 푼 것
    // for(let i=0; i<arr.length-k+1;i++){

    //     let tmp = i, test = k;
    //     sum=0;
    //     while(test){
    //         sum+=arr[tmp] // 0 1 2
    //         tmp++ // 1 2 3
    //         test--; // 2 1 0
    //     }

    //     if(sum > max) max = sum;
    // }
    // answer = max;



    // 슬라이딩 윈도우 알고리즘
    for(let i=0; i<k; i++) sum+=arr[i];
    answer = sum;

    for(let i=k; i<arr.length; i++){
        sum+=(arr[i] -arr[i-k]);
        answer = Math.max(answer, sum);
    }

    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));