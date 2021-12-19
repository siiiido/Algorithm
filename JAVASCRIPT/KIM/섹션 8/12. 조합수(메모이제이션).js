function solution(n, r){         
    let answer=[];

    //정석 버전 -> DFS(33,19)하면 시간 엄청 걸림
    // function DFS(n,r){
    //     if(n === r || r === 0) return 1;
    //     else return DFS(n-1, r-1) + DFS(n-1 ,r);
    // }
    
    
    //메모이제이션 -> 정석 버전보다 훨씬 빠름
    // let dy = Array.from(Array(3), ()=>Array(5).fill(0)); // 3행 5열 배열 만들기
    let dy = Array.from(Array(35), ()=>Array(35).fill(0)); 
    
    function DFS(n,r){
        if(dy[n][r] > 0) return dy[n][r];
        if(n === r || r === 0) return 1;
        else return dy[n][r] =  DFS(n-1, r-1) + DFS(n-1 ,r);
    }

    answer = DFS(n,r);
    return answer;
}

console.log(solution(33, 19));