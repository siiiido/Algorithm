function solution(arr){
    let answer="NO", flag=0;
    let total = arr.reduce((a,b)=> a+b,0);
    let n = arr.length;

    function DFS(L, sum){
        if(flag) return;
        if(L === n){
            if((total - sum) === sum){
                answer='YES';
                flag = 1; // flag가 1이 되면 재귀가 더 이상 돌 필요가 없다.
            } 
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }

    DFS(0,0);
  
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));