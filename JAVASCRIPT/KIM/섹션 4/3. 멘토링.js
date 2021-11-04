function solution(test){
    let answer=0, tmp=[];
    let m = test.length; //테스트 횟수 = 행의 갯수
    let n = test[0].length; // 학생의 수

    //4중 for문 돌리기

    //i를 멘토라고 생각하고 시작
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            // console.log(i, j); // 총 경우의 수가 출력 -> 16가지
            let cnt = 0;
            for(let k=0; k<m; k++){
                let pi=pj=0;
                for(let s=0; s<n; s++){
                    if(test[k][s] === i) pi = s;
                    if(test[k][s] === j) pj = s;
                }
                if(pi<pj) cnt++;
            }
            // 모든 통과 테스트 했을 때
            if(cnt === m){
                tmp.push([i,j]);
                answer++;
            } 
        }
    }
    console.log(tmp)
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));