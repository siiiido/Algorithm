# 배운 것 정리하기

* 삼각형 조건 : 가장 긴 변 < 나머지 두 변의 합   
즉 가장 긴 변 >= 나머지 두 변의 합 이면 삼각형이 만들어 질 수 없다.

* ## Math 객체 잘 알기
``` javascript
Math.ceil(2.123) => 3 //올림
Math.floor(2.98) => 2 //내림
Math.round(2.5) => 3 // 반올림
```

* ## Number.MAX_SAFE_INTEGER : 엄청나게 큰 숫자 -> 최솟값 구할 때 초기값으로 설정하면 편함  


* ## 내장함수 최솟값, 최대값
```javascript
//Math.min() : 최솟값 구하기[인자를 넣어야함]

let a = Math.min(8,10,2); // 2
let a= Math.min(arr); // ERROR, 배열 넣으면 에러 뜸(인자를 넣어야함)

let a = Math.min(...arr); // 배열을 넣을 때는 이렇게 spread로 펴줘서 넣어야한다.


//Math.max() : 최댓값 구하기[인자를 넣어야함]
let a = Math.max(8,10,2); // 10
let a= Math.max(arr); // ERROR, 배열 넣으면 에러 뜸(인자를 넣어야함)

let a = Math.max(...arr); // 배열을 넣을 때는 이렇게 spread로 펴줘서 넣어야한다.
```
* ## for of
```javascript
let a=[10,11,12,13,14,15];
// for(let i of a) 는
// for(let i=0; i<a.length; i++)와 동일 -> 배열 원소 순서대로 하나씩 출력

// 문자열도 가능
let str = "songsang"
// for(let i of str) 은 str문자열 하나씩 출력
```

* ## forEach => for 반복문 대신 사용 가능
```javascript
a=[10,11,12,13,14,15]
// a.forEach(pre, thisArg) -> 매개변수 2개

// 대략적 원리
function forEach(pre, thisArg){ // pre는 함수만 전달, 생략 불가능 //  thisArg는 this, 생략가능 
    for(let i=0; i<a.length; i++){
        pre(a[i], i);
    }
}


// forEach는 첫번째 인자(함수 인자)에서 배열 요소와 배열 인덱스를 받는다
a.forEach(function(v,i){
    // v는 a[i] 즉 배열 요소 값
    // i는 i 즉 배열 인덱스
    // this는 [1,2]
    console.log(v,i,this);
},[1,2]);

/*
출력값
    배열요소 인덱스  this
      10      0     [1,2]
      11      1     [1,2]
      12      2     [1,2]
      13      3     [1,2]
            ...
      15      5     [1,2]        
*/

```


* ## map
```javascript
//대략적 원리 -> 새로운 배열을 만들어서 그걸 반환
function map(pre, thisArg){
    let list = []; // 무조건 원본 배열과 길이가 같다
    for(let i=0; i<a.length; i++){
        list.push(pre(a[i], i));
    }
    return list;
}

a = [10,11,12,13,14,15];
//첫 번째 케이스 
let answer = a.map(function(v,i){
    return v*v;
},[1,2]);

console.log(answer); // 각 원소 제곱 출력


//두 번째 케이스
let answer = a.map(function(v,i){
    if(v % 2 === 0) return v;
},[1,2]);

console.log(answer); // 홀수는 return이 되지 않지만 map은 무조건 원본 배열과 길이가 같은걸 출력하기 때문에 undefined가 출력
// 따라서 10, undefined, 12, undefined, 14, undefined 가 출력 
```


* ## filter
```javascript
// filter는 새로운 배열을 생성해서 return하지만 map처럼 원본 배열 길이와 동일하게 return하는것이 아니라 정확히 내가 원하는 원본 배열 요소로만 새로운 배열을 생성해서 return함

//대략적 동작원리
function map(pre, thisArg){
    let list = []; // 새로운 배열
    for(let i=0; i<a.length; i++){
        if(pre(a[i],i)){
            list.push(a[i]) // if가 참일때만 새로운 배열에 push해서 return함
        }
    }
    return list;
}


a = [10,11,12,13,14,15];

let answer = a.filter(function(v,i){
    return v % 2 === 0; // 참이 되는 원본 배열만 return함, 즉 배열에서 짝수만 return
},[1,2]);

console.log(answer); // 10, 12, 14


let answer = a.filter(function(v,i){
    return v % 2 === 1; // 참이 되는 원본 배열만 return함, 즉 배열에서 홀수만 return
},[1,2]);

console.log(answer); // 11, 13, 15



/*
map : 원본 배열과 길이 무조건 같음, 새로운 배열에 원본 배열 요소값을 계산해서 push가능(즉 커스텀 가능)
filter : 원본 배열과 길이 다를 수 있음, 새로운 배열에 무조건 내가 원하는 원본 배열 요소값을 push
*/
```


* ## reduce
```javascript
//대략적 원리
function reduce(pre, val){
    let result = val;
    for(let i=0; i<a.length; i++){
        return = pre(result, a[i]);
    
    }
    return result;
}

a=[2,3,4,5,6];
let answer = a.reduce(function(acc,v){ 
// acc는 5로 초기값 하고 그 다음 부터 return 값이 저장됨(여기서는 acc + v값이 저장됨)
// v는 배열 원소 값
    console.log(acc, v);
    /*
    5  2
    7  3
    10 4
    14 5
    19 6
    */
    return acc + v;
},5); // 5는 acc 초기값

console.log(answer); // 25
```


* ## splice
```javascript
// 쉽게 말하면 없애는 것
let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];

arr.splice(배열 인덱스, 갯수);
arr.splice(3,1); // arr[3]인 19를 없앤다
arr.splice(3,2); // 뒷 인자가 2니깐 arr[3], arr[4]인 19, 10을 없앤다


for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if((sum - (arr[i] + arr[j])) === 100){
                arr.splice(i,1);
                arr.splice(j,1);
                /*
                이렇게 해서 i = 5, j=6 이라고 해보자
                arr[5] = 15,  arr[6] = 25 이라서 
                arr=[20, 7, 23, 19, 10, 8, 13];이 될 것 같지만 아니다.
                arr.splice(i,1); 즉 arr.splice(5,1); 해서
                arr=[20, 7, 23, 19, 10, 25, 8, 13];가 되었다.

                그리고 arr.splice(j,1); 즉 arr.splice(6,1);을 하면
                배열 인덱스가 하나씩 당겨지니깐 arr[6] = 8이 되었다. -> 원래 의도는 25를 없애는 것이었는데 의도에서 벗어남

                즉 splice는 배열 원소를 없애면 배열을 앞으로 당기기 때문에 위에서는 j를 먼저 splice 해줘야한다.


                이렇게!!
                arr.splice(j,1);
                arr.splice(i,1);
                */
            }
        }
    }
```


* ## 얕은 복사  
    * 같은 메모리를 참조함
    * 하지만 문자열일 때는 값만 주소 안받고 값만 받음  
```javascript
let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
let answer = arr; // 얕은 복사 -> arr을 수정하면 answer도 수정됨, 반대로 answer을 수정하면 arr도 수정됨

arr.push("TEST");
console.log(ans); // [20, 7, 23, 19, 10, 15, 25, 8, 13, 'TEST']

ans.push(8746);
console.log(arr); //[20, 7, 23, 19, 10, 15, 25, 8, 13, 'TEST', 8746]

//문자열 일때는 값만 복사하고 주소를 복사하지 않는다. 즉 기본복사를 한다.
let str="BANANA";
let ans = str; 

ans = ans.slice(2);

console.log("ans : " + ans); // ans : NANA
console.log("str : "+ str); // str : BANANA
```

* ## 정규표현식과 replace
```javascript
//정규표현식 g가 있어야 모두다 바꾸고 없으면 처음 발견한 하나만 바꾼다
let str="BANANA";
console.log(str.replace(/A/, '#')); //B#NANA

let str="BANANA";
console.log(str.replace(/A/g, '#')); //B#N#N#
```

* ## split
```javascript
let str="COMPUTERPROGRAMMING";

//문자열 str에서 R을 빼고 출력
console.log(str.split("R"); //['COMPUTE', 'P', 'OG', 'AMMING']

//R이 몇개 있었는지 알고 싶으면
let str="COMPUTERPROGRAMMING";
console.log(str.split("R").length-1); // 3 

//끝에 R이 있어도 가능
let str="COMPUTERPROGRAMMINGR"; // R 추가
console.log(str.split("R").length-1); // 4 
```

* ## 문자,문자열 대문자, 소문자
    * toUpperCase() : 대문자로 바꾸기
    * toLowerCase() : 소문자로 바꾸기
    * String.fromCharCode(아스키 넘버) : 아스키 넘버를 문자로 바꾸기
    * charCodeAt() : 문자를 아스키 넘버로 바꾸기
    * 아스키 넘버
        * 대문자 : 65(A) ~ 90(Z) 
        * 소문자 : 97(a) ~ 122(z)
        * 소문자 -32 = 대문자
        * 대문자 + 32 = 소문자 
```javascript
//대문자
let str="KoreaTimeGood";
let up = str.toUpperCase(); 
console.log(up);//KOREATIMEGOOD

//소문자
let low = str.toLowerCase();
console.log(low);//koreatimegood

//문자 -> 아스키 넘버
let str="KoreaTimeGood";
let ans = str.charCodeAt();
console.log(ans); //75 아스키 넘버는 하나만 바꿈

for(let x of str){
    console.log(x.charCodeAt()); //아스키 넘버 모두 출력
}

//아스키 넘버 -> 문자
let asci = [77, 100, 80, 110];
for(let x of asci){
    console.log(String.fromCharCode(x));// M d P n
}

//아스키 넘버 대문자 소문자
let str = "abc";
for(let x of str){
    let num = x.charCodeAt();
    console.log(String.fromCharCode(num-32));// A B C
}
```
