function solution(n, k, card){
    let answer;
    
    
    // let array = [];


    // for(let i=0; i<n; i++){
    //     for(let j=i+1; j<n; j++){
    //         for(let k=j+1; k<n; k++){
    //             let sum = (card[i] + card[j] + card[k]);
    //             array.push(sum);
    //         }
    //     }
    // }
    // array.sort((a,b)=> b-a);
    // answer = array[k-1];

    
    let tmp = new Set();
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k = j+1; k<n; k++){
                tmp.add(card[i] + card[j] + card[k]);
            }
        }
    }

    let a = Array.from(tmp).sort((a,b)=> b-a); // 내림 차순
    // console.log(a);

    answer = a[k-1];

    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));