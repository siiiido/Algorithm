function solution(m, arr){
    let answer=0, sum=0, lt=0;

    // 내가 푼 것
    // for(let i=0; i<arr.length; i++){
    //     sum=0;
    //     for(let j=i; j<arr.length; j++){
    //         sum+=arr[j];
    //         if(sum <= m){
    //             console.log(arr[j]);
    //             answer++;
    //         }
    //         else break;
    //     }
    // }


    // 이해 이해 이해 이해 -!
    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];

        while(sum > m){
            sum -= arr[lt++]
        }

        answer+=(rt-lt+1);
    }

    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));