function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];

    for(let x of times){
        T_line.push([x[0], 's'] ); // 시작 시간 넣기
        T_line.push([x[1], 'e'] ); // 가는 시간 넣기
    }

    T_line.sort((a,b)=>{
        //시간이 같으면 e 먼저 적고 s 적기
        //e가 s보다 먼저 있으니(ASCII) return a[1]-b[1]
        if(a[0] === b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
        else return a[0] - b[0];// 오름차순
    });

    let cnt = 0;
    for(let x of T_line){
        if(x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    }

    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));