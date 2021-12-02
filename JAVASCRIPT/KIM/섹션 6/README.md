# 배운 것 정리하기


* ## isNaN(x)은 isNaN(Number(x))와 동일하다.

<br><br>


* ## 배열의 stack과 queue
  * 배열 (숫자 문자열 모두 가능)
  * stack은 LIFO : 마지막에 들어온 것이 마지막에 나감
  * queue은 FIFO : 처음 들어온 것이 처음 나감
    * pop() : 배열 맨 마지막 부분 요소 제거 후 반환, 빈 배열이면 undefined -> stack에 사용
    * shift() : 배열 맨 첫 부분 요소 제거 후 반환, 빈 배열이면 undefined -> queue에 사용
    * push() : 배열 맨 마지막 요소에 추가 후 길이 반환 -> stack, queue 모두 사용

```javascript
let test = [1,2,3,4,5,6,7];

console.log(test.pop()); // 7
let a = test.pop();
console.log(a); // 6

console.log(test.shift()); // 1
let b = test.shift(); 
console.log(b); // 2

console.log(test); // [ 3, 4, 5 ]

console.log(test.push(6)); // 4 (길이)
let c = test.push(7);
console.log(c); // 5 (길이)

console.log(test); //[ 3, 4, 5, 6, 7 ]
```

<br><br>


* ## String.include() : 특정 문자열이 있는지 확인하는 메서드(대소문자 구분)
```javascript
// String.includes(검색할 문자열, 검색을 시작할 위치)
// 검색을 시작할 위치의 디폴트는 전체 문자열을 대상으로 한다

let test = 'sanghan';

test.includes('s'); // true

test.includes('S'); // false (대소문자 구분)

test.includes('s', 2); // false (test[2]부터 s가 있는지 확인함)

test.includes('s',0); // true
```
