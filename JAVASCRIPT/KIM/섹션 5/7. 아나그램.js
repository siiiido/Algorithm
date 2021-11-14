function solution(str1, str2){
    let answer="YES"; 

    // 내가 푼 것
    // let s1 = new Map();
    // let s2 = new Map();

    // for(let x of str1){
    //     if(s1.has(x)) s1.set(x, s1.get(x)+1);
    //     else s1.set(x,1);
    // }

    // for(let x of str2){
    //     if(s2.has(x)) s2.set(x, s2.get(x)+1);
    //     else s2.set(x,1);
    // }

    // for(let [key,val] of s1){
    //     for(let [s2Key, s2Val] of s2){
    //         if(key === s2Key && val !== s2Val) answer = "No"
    //         else if(key !== s2Key) answer = "No";
    //         else if(key === s2Key && val===s2Val) answer = "Yes";
    //     }
    // }

    // console.log(s1 , " s1");
    // console.log(s2 , " s2");



    //풀이
    let sH = new Map();
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x,1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x) === 0) return "NO";
        sH.set(x, sH.get(x)-1);
    }
    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
// let a="abaCC";
// let b="Caaab";
console.log(solution(a, b));