function solution(arr1, arr2){
    let answer=[];

    // 내가 푼것
    // for(let i=0; i<arr1.length; i++){
    //     for(let j=0; j<arr2.length; j++){
    //         if(arr1[i] === arr2[j]) answer.push(arr1[i]);
    //     }
    // }

    // answer.sort((a,b)=>a-b);



    // sort() 메서드에서 콜백함수 없이 그냥 쓰면 원소들을 문자열로 변환해서 정렬함
    // 즉 문자순으로 정렬된다.
    // [1,3,10,5,2]  ->  사전순으로 정렬 하면 [1, 10, 2, 3, 5]


    // arr1.sort(); // 원소들을 문자열로 변환해서 정렬함
    // arr2.sort();
    
    //정렬 기준으로 주자!!
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    let p1 = p2 = 0;

    while(p1<arr1.length && p2<arr2.length) {
        if(arr1[p1] === arr2[p2]){
            answer.push(arr1[p1++]);
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++;
        else p2++;
    }

    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));