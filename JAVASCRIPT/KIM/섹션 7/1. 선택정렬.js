function solution(arr){
    let answer=arr; 
    //최솟값을 맨 앞으로 이동
    for(let i=0; i<arr.length-1; i++){
        let idx = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[idx]) idx = j;
        }
        [arr[i], arr[idx]] = [ arr[idx], arr[i] ];
    }
   
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));