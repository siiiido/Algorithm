function solution(size, arr){
    let answer=Array.from({length:size}, ()=>0);

    // for(let i=0; i<arr.length; i++){
    //     console.log('첫 번째');
    //     if(!answer.includes(arr[i])){
    //         answer.unshift(arr[i]);
    //         while(answer.length > 5) answer.pop();
    //     }else{
    //         answer.splice(answer.indexOf(arr[i]));
    //         answer.unshift(arr[i]);
    //     }
    // }


    // 삽입정렬 version
    // arr.forEach(x => {
    //     let pos = -1;
        
    //     // pos에 hit인지 miss인지 알 수 있음
    //     // pos가 -1이면 miss
    //     // pos가 -1아니면 hit
    //     for(let i=0; i<size; i++) if(x === answer[i]) pos = i;
        
    //     //miss일 때
    //     if(pos === -1){
    //         for(let i=size-1; i>=1; i--){
    //             answer[i] = answer[i-1];
    //         }
    //     }
    //     //hit일 때
    //     else{
    //         for(let i=pos; i>=1; i--){
    //             answer[i] = answer[i-1];
    //         }
    //     }

    //     //miss나 hit 둘다 공통이므로 맨 밑에서 한 번만 하면 된다.
    //     answer[0] = x;
    // });




    arr.forEach(x => {
        let pos = -1;

        for(let i=0; i<size; i++) if(x === answer[i]) pos = i;
        
        //miss일 때
        if(pos === -1){
            answer.unshift(x);
            if(answer.length > size) answer.pop();
        }
        //hit일 때
        else{
            answer.splice(pos, 1);
            answer.unshift(x);
        }
    });

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));