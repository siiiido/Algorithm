function solution(n, f){         
    let answer, flag=0;


    let dy = Array.from(Array(11), ()=> Array(11).fill(0));
    let ch = Array.from( {length : n+1}, ()=>0 );
    let p = Array.from( {length : n }, ()=>0 ); // 순열 저장할 곳
    let pCopy = []; // p는 push, pop으로도 컨트롤 할 수 있다.
    let b = Array.from( {length : n}, ()=> 0 ); // 조합수 저장할 곳

    function combi(n,r){
        if(dy[n][r] > 0) return dy[n][r];
        if(n === r || r === 0) return 1;
        else return dy[n][r] = combi(n-1 , r-1) + combi(n-1, r);
    }


    //p대신 pCopy로 push, pop으로도 나타내기 가능
    function DFS(L, sum){
        if(flag) return;
        if(L === n && sum === f){
            // answer = p.slice();
            answer = pCopy.slice();
            flag = 1
        }
        else{
            for(let i=1; i<=n; i++){
                if(ch[i] === 0){
                    ch[i] =1;
                    // p[L] = i; // p[L]대신 push, pop으로 나타내기도 가능
                    pCopy.push(i);
                    // DFS(L + 1 , sum+(b[L] * p[L]));
                    DFS(L + 1 , sum+(b[L] * pCopy[L]));
                    ch[i] = 0 // 체크 풀어주기
                    pCopy.pop();
                }
            }
        }
    }


    for(let i=0; i<n; i++){
        b[i] = combi(n-1 , i)
    }

    DFS(0 , 0);

    return answer;
}

console.log(solution(4, 16));