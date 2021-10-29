# 배운 것 정리하기
 
 <br>

* ## reverse() , join()
  
  <br>

```javascript
// reverse( ) : 배열의 순서를 거꾸로 만든다.
let arr = [1, 2, 3, 4, 5];
let arrCopy =  arr.reverse();

// 원본 배열도 거꾸로 변형시키니다.
console.log(arr); // [5, 4, 3, 2, 1]
console.log(arrCopy); // [5, 4, 3, 2, 1]

let strArr = ["meta", "apple", "amazon"];
let strArrCopy = strArr.reverse();
console.log(strArr); // ['amazon', 'apple', 'meta']
console.log(strArrCopy); // ['amazon', 'apple', 'meta']


//여기서 원본 배열을 변형 안시키고 유지하고 싶으면?? -> spread!!
let stockArr = ["meta", "apple", "amazon"];
let stockArrCopy = [...stockArr].reverse();
console.log(stockArr); // ['meta', 'apple', 'amazon'] -> reverse적용되서 변형안됨
console.log(stockArrCopy); // ['amazon', 'apple', 'meta']  -> reverse적용되서 변형됨



//문자열은 에러난다!!
let str = "songsang";
let strCopy = str.reverse(); // 에러난다!! : str.reverse is not a function



// 문자열은 문자를 배열로 만들어서 reverse 실행해야한다 -> 원본 변형 안된다!

let str = "songsang";
let strCopy = str.split('').reverse();
console.log(str); // songsang
console.log(strCopy); // ['g', 'n', 'a', 's', 'g', 'n', 'o', 's']

//여기서 strCopy를 배열이 아닌 문자열로 사용하고 싶으면 ???? -> join()
// join()은 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
strCopy = strCopy.join('');
console.log(strCopy); // gnasgnos


let number = [8,7,4,6];
console.log(number.join('👍')); // 8👍7👍4👍6
```

<br>
<br>

* ## replace(/[^a-z]/g, ' ')
```javascript
let str="g0en2T0s8eSoft";
let strCopy = str.replace(/[^a-z]/g, '');// str에서 a부터 z사이가 아닌 것은 모두 없앤다
console.log(strCopy); // genseoft
```

<br>
<br>

* ## isNan
   * 숫자가 아닌 값을 찾느 함수
   * 인수가 숫자가 아니면 true, 인수가 숫자면 false 반환
```javascript
console.log(isNaN(8746)); // false
console.log(isNaN("8746")); // false
console.log(isNaN("songsang")); // true
console.log(isNaN(8.49));// false
console.log(isNaN(true));// false -> 논리형 자료 : true=1
console.log(isNaN(8*4));// false -> 계산 후 isNaN 적용됨
```

<br>
<br>