function solution(arr){
    let answer=[];
    // let hyun = [];
    // let jak = [];
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] > arr[i+1] ){
    //         hyun.push(i+1);
    //     } 
    //     else if(arr[i] < arr[i-1]){
    //         jak.push(i+1);
    //     } 
    // }
    // answer.push(hyun[0]);
    // answer.push(jak[1]);


    //깊은 복사
    /*
        arr이 기본형 배열(1차원 배열)로 되어있으면 깊은 복사가 되지만
        배열안에 배열이 있거나 (2차원 배열 이상부터는) 얕은 복사 
    */
    let sortArr = arr.slice();
    

    /*
    자바스크립트에서 .sort()는 문자열 정리다.
    예를들면 120, 131, 99가 있으면 
    99가 맨 앞으로 안오고 맨 뒤로 온다.
    그래서 콜백함수 사용해서 (a,b)=>a-b함
    */
    sortArr.sort((a,b)=> a-b);


    for(let i=0; i<arr.length; i++){
        if(arr[i] !== sortArr[i]) answer.push(i+1);
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
