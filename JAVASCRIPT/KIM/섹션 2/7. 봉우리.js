function solution(arr){  
    let answer=0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0]; // 상, 우, 하, 좌
    let dy = [0, 1, 0, -1]; // 상, 우, 하, 좌

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let flag = 1; //true

            //dx, dy 돌기
            for(let k=0; k<4; k++){ 
                let nx = i + dx[k];
                let ny = j + dy[k];

                //nx >=0 && nx<n && ny >= 0 && ny < n 는 테두리를 안벗어나게 하는 조건
                if(nx >=0 && nx<n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]){
                    //arr[i][j]가 상하좌우 중 최댓값이 아니니 falg=0으로 만들고 for문 탈출
                    flag = 0;
                    break;
                }
            }
            //flag가 true면 = flag가 1이다
            if(flag) answer++;
        }
    }
    
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];
console.log(solution(arr));