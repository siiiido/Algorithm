function solution(arr){
    let answer=[];

    // for(let x of arr){
    //     let sum=0, z=1; 
    //     let tmp=x, b; // tmp : 몫,  b : 나머지

    //     let n = String(tmp).length;
    //     // console.log(n)

    //     for(let i=0; i<n-1; i++){
    //         z*=10;
    //     }
        
    //     while(tmp){
    //         b = tmp % 10;
    //         sum = sum + (b*z);
    //         z/=10;
    //         tmp=parseInt(tmp/10);
    //     }

    //     // console.log(sum)

    //     let boolean = true;


    //     if (sum === 1) boolean = false;
    //     for(let i=2; i<sum; i++){
    //         if(sum%i === 0) boolean = false;
    //     }

    //     if(boolean) answer.push(sum);

        
    // }

    // for(let x of arr){
    //     // case1 숫자로 뒤집기
    //     let res = 0; // x를 뒤집은 숫자
    //     while(x){
    //         let t = x % 10;
    //         res = res * 10 + t;
    //         x = parseInt(x/10);
    //     }
    //     if(isPrime(res)) answer.push(res);
    // }

    // case2 문자 사용해서 뒤집기
    for(let x of arr){
        let res = Number(x.toString().split('').reverse().join(''));
        // console.log(res);
        if(isPrime(res)) answer.push(res);
    }

    return answer;
}

function isPrime(num){
    if(num === 1) return false;

    //case1 숫자 끝까지 돌면서 소수 확인
    // for(let i=2; i<num; i++){} 

    //case2 숫자 반만 돌면서 소수 확인
    // for(let i=2; i<=parseInt(num/2); i++){}

    //case3 제곱근 까지만 돌면서 소수 확인
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i === 0) return false;
    }
    return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));