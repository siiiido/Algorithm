function solution(n, arr){

    let answer, max=Number.MIN_SAFE_INTEGER;
    // let a; // 나머지
    // let answerCopy = []

    // for(let i=0; i<arr.length; i++){
    //     let tmp=arr[i], sum=0;
    //     let arrLen = String(arr[i]).length;

    //     while(arrLen>0){
    //         a = tmp % 10;
    //         sum+=a;
    //         tmp = parseInt(tmp/10);
    //         arrLen--;
    //     }
    //     if(sum >= max){
    //         max = sum;
    //         answerCopy.push(arr[i]);
    //     }
    // }

    // if(answerCopy.length<2) answer = answerCopy;
    // else answer = Math.max(...answerCopy);

    // 1. 숫자 자체를 이용해서 한 것
    // for(let x of arr){
    //     let sum = 0, tmp = x;

    //     while(tmp){
    //         sum += (tmp%10);
    //         tmp=Math.floor(tmp/10);
    //     }
    //     if(sum > max){
    //         max = sum;
    //         answer = x;
    //     }

    //     else if(sum === max){
    //         if(x>answer) answer = x;
    //     }
    // }


    // 2. 내장함수 사용하기
    for(let x of arr){
        let sum=x.toString().split('').reduce((a,b) => a + Number(b), 0);
        // console.log(sum);
        if(sum > max){
            max = sum;
            answer = x;
        }
        else if(sum === max){
            if(x>answer) answer = x;
        }
    }

    return answer;
}

let arr=[235, 460, 603, 40, 1234, 137, 123];
console.log(solution(7, arr));