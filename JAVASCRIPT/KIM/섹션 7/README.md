# 배운 것 정리하기

<br><br>


* ## SWAP
```javascript
let a = 1;
let b = 'song';

[ a, b ] = [ b , a ] 
console.log(a ,b); // song, 1

let tmp = [1,2,3,4,5,6,7];
[ tmp[1] , tmp[5] ] = [ tmp[5], tmp[1] ];
console.log(tmp); // [ 1, 6, 3, 4, 5, 2, 7 ]

let tmp1 = ['a', 'b', 'c','d','e'];
[ tmp[2] , tmp1[3] ] = [ tmp1[3], tmp[2] ];
console.log(tmp1); // [ 'a', 'b', 'c', 3, 'e' ]
```

<br><br>

* ## sort()
* 매개변수 없이 정렬 할 경우 ASCII 문자 기준 오름차순 정렬 된다.
* 반환 값
  * 양수 ( 반환 값 > 0 ) : b가 앞에 있어야 한다. a보다 -> 변화 있음
  * 0 ( 반환 값 = 0 ) : a와 b의 순서를 바꾸지 않는다 -> 변화 없음
  * 음수 (반환 값 < 0 ) : a가 앞에 있어야 한다. b보다 -> 변화 없음
```javascript
arr.sort(매개변수) // 매개변수는 있어도 되고 없어도 된다.


//숫자 정렬
let num = [1, 11, 13, 9, 32]; 
num.sort(); //[1, 11, 13, 32, 9]
/*
    정렬할 때 숫자 타입을 문자열(String) 타입으로 형 변환하여 비교하기 때문에 첫 번째 문자를 기준으로 비교하여 32보다 9가 더 크다고 나온다.
*/

//문자 정렬
var fruit = ['cherries', 'apples', 'bananas']; 
fruit.sort(); // ['apples', 'bananas', 'cherries']


// 반환 값
let num = [1, 11, 13, 9, 32]; 

//오름차순
num.sort(function(a,b){
    return a-b;
}) // [1, 9, 11, 13, 32]

num.sort((a,b)=>a-b);



//내림차순
num.sort(function(a,b){
    return b-a;
}) // [32, 13, 11, 9, 1]

num.sort((a,b)=>b-a);



//Object도 정렬 가능
let 코스트코 = [
    {name : '바나나', price : 2100},
    {name : '포도', price : 3500},
    {name : '사과', price : 1200},
    {name : '청포도', price : 2100},
    {name : '귤', price : 4000}
];
코스트코.sort((a,b)=> a.price - b.price );
/*
    {name: '사과', price: 1200}
    {name: '바나나', price: 2100}
    {name: '청포도', price: 2100}
    {name: '포도', price: 3500}
    {name: '귤', price: 4000}
*/



//Custom도 가능하다
// 조건 : 요소가 0이면 맨 뒤로 정렬하고 아니면 오름차순

let num = [1,2,0,3,0,12,32,9,0];
num.sort((a,b)=>{
    if(a === 0) return 1; // 반환 값 양수
    else if(b === 0) return -1; // 반환 값 음수
    else return a-b; // 오름차순
}) // [1, 2, 3, 9, 12, 32, 0, 0, 0]
```