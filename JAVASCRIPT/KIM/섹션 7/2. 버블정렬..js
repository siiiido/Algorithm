function solution(arr){
/*
    i=0일 때 배열 맨 뒷자리(arr[5])에 가장 큰수가 들어감
    i=1일 때 arr[4]에 2번째로 큰수가 들어감
                .
                .
                .
    즉 i는 배열길이-1 만큼 돈다.
    j는 배열길이-i 만큼 돈다.
*/    

    let answer=arr;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
            } 
        }
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));