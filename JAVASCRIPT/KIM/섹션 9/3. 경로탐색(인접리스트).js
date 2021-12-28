function solution(n, arr){  
    let answer=0;
    let graph = Array.from(Array(n+1), ()=>Array()); // 인덱스 1번부터 사용
    let ch = Array.from({length : n+1}, ()=>0); //체크 배열
    let path = [];

    for(let [a,b] of arr){
        graph[a].push(b);    
    }
    
    function DFS(v){
        if(v === n){
            answer++;
            console.log(path);
        }
        else{
            for(let i=0; i<graph[v].length; i++){
                //graph[v][i]는 v정점에서 갈 수 있는 번호
                if(ch[graph[v][i]] === 0){
                    ch[graph[v][i]]=1;
                    path.push(graph[v][i])
                    DFS(graph[v][i]);
                    ch[graph[v][i]]=0;
                    path.pop();
                }
            }
        }
    }

    //중요!!
    path.push(1);
    ch[1]=1;
    DFS(1);
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));