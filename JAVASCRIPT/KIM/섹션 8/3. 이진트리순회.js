function solution(n){
    let answer;

    function DFS(n){
        //종료지점
        if(n > 7) return;
        //트리 뻗는 곳
        else{
            // console.log(n); // 전위 순회
            DFS(n*2); // 왼쪽 자식
            // console.log(n); // 중위 순회
            DFS(n*2 + 1); // 오른쪽 자식
            // console.log(n); // 후위 순회
        }
    }

    DFS(n);

    return answer;
}

console.log(solution(1));