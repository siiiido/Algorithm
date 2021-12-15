function solution(n, m){
    let answer=[];

    // for문으로 풀었을 때 : m이 바뀔 때 마다 for문의 갯수가 수정되어야 함
    // // m = 3이면 for문을 하나 더 추가해야함 그래서 재귀를 사용한다.
    // for(let i=1; i<=n; i++){
    //     for(let j=1; j<=n; j++){
    //         console.log(i, j);
    //     }
    // }


    // 재귀를 풀었을 때
    let tmp = Array.from({length : m} , ()=>0);
    
    function DFS(L){
        if(L === m){
            // answer.push(tmp); // 마지막 원소로 다 채워짐  -> 얉은 복사 때문에 다 같은 메모리를 참조한다.
            answer.push(tmp.slice());  // 이렇게 바꿔줘야함


        }else{
            for(let i=1; i<=n; i++){
                tmp[L] = i;
                DFS(L+1);
            }
        }
    }

    DFS(0);

    return answer;
}

console.log(solution(3, 2));