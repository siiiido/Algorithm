function solution(n){
    
    function DFS(L){
        if(L === 0) return
        else{
            // console.log(L); // 3 2 1
            DFS(L-1)
            console.log(L); // 1 2 3 
        }
    }
    DFS(n);
}

solution(3);

/*
   - 11번 라인에서 DFS(3) 실행
   - DFS(3) 함수가 실행되다가 7번 라인에서 DFS(2) 실행
   - DFS(2) 함수가 실행되다가 7번 라인에서 DFS(1) 실행
   - DFS(1) 함수가 실행되다가 7번 라인에서 DFS(0) 실행
   - DFS(0) 함수가 실행되면서 4번 라인에서 if 조건문에 걸려서 return
   - DFS(1) 함수가 다시 8번 라인부터 끝까지 실핼 -> 1 출력
   - DFS(2) 함수가 다시 8번 라인부터 끝까지 실핼 -> 2 출력
   - DFS(3) 함수가 다시 8번 라인부터 끝까지 실핼 -> 3 출력
   


*/