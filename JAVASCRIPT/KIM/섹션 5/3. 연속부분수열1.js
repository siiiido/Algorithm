function solution(m, arr){
    let answer=0, lt=0, sum=0;

    // 내가 푼 것
    // for(let i=0; i<arr.length; i++){
    //     sum=0;
    //     for(let j=i; j<arr.length; j++){
    //         sum+=arr[j];
    //         if(sum === 6){
    //             answer++;
    //             break;
    //         }
    //     }
    // }


    // 이해 이해 이해 또 이해!!
    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        if(sum === m) answer++;
        
        while(sum>=m){
            sum-=arr[lt++];
            if(sum === m){
                answer++;
                console.log(lt, rt);
            } 
        }

    }


    
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));