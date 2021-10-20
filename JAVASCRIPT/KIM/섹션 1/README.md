# 배운 것 정리하기

* 삼각형 조건 : 가장 긴 변 < 나머지 두 변의 합   
즉 가장 긴 변 >= 나머지 두 변의 합 이면 삼각형이 만들어 질 수 없다.

* Math 객체 잘 알기
``` javascript
Math.ceil(2.123) => 3 //올림
Math.floor(2.98) => 2 //내림
Math.round(2.5) => 3 // 반올림
```

* Number.MAX_SAFE_INTEGER : 엄청나게 큰 숫자 -> 최솟값 구할 때 초기값으로 설정하면 편함

* 내장함수 최솟값, 최대값
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