function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let rowsum=colsum=0; //row : 행(가로), column : 열(세로)
    
    //case1 행의 합과 열의 합에서 최댓값 찾기
    for(let i=0; i<n; i++){
        rowsum = colsum = 0; //매번 초기화
        for(let j=0; j<n; j++){
            rowsum+=arr[i][j];
            colsum+=arr[j][i];
        }
        answer = Math.max(answer, rowsum, colsum);
    }
    rowsum = colsum = 0; // 초기화하고 두 대각선의 합 구할때 재사용하기

    //case2 두 대각선에서 최대값 찾기
    for(let i=0; i<n; i++){
        rowsum+=arr[i][i];
        colsum+=arr[i][n-i-1];
    }

    answer = Math.max(answer, rowsum, colsum);
    
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];
console.log(solution(arr));