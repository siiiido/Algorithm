function solution(arr1, arr2){
    let answer=[];
    
    // sort쓰면 시간복잡도 nlong(n)이다!!
    // 내가 푼 것
    // answer = [...arr1, ...arr2];
    // answer.sort((a,b)=>a-b); // 오름차순
    // answer.sort((a,b)=>b-a); // 내림차순

    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    while(p1<n && p2<m){ // 조건 잘 이해하기!!
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]); // arr1[p1]을 푸시하고  p1++
        else answer.push(arr2[p2++]);
    }
    
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]);
    
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));