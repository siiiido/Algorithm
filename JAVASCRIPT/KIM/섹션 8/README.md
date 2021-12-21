# 배운 것 정리하기

<br><br>

* ## 원시 타입(Primitive type), 참조 타입(Reference type)
  * **원시 타입(Primitive type)** :  String, Number, Boolean, null, undefined, Symbol, bigint
    * 깊은 복사(Deep copy)만 존재, 즉 원시 타입은 복사 자체가 깊은 복사이다.
  * **참조 타입(Reference type)** : 객체(Object), 배열(Array), 함수(Function) 등 원시 타입을 제외한 모든 값이 참조 타입이다.
    * 얕은 복사(Shallow copy), 깊은 복사(Deep copy) 둘 다 존재

<br>

* ## 깊은 복사(Deep copy), 얕은 복사(Shallow copy)
  * **깊은 복사(Deep copy)** = 데이터 하나 그대로 더 생성하는 것
    * 즉 깊은 복사를 하면 수정할 때 서로서로 영향을 안 미친다.
    * 독립적인 메모리에 값 자체를 할당하여 생성하는 것 
  * **얕은 복사(Shallow copy)** = 데이터를 공유하는 것
    * 데이터를 그래도 생성하는 것이 아닌 해당 데이터의 참조 값(메모리 주소)를 전달하여 한 데이터를 공유함


<br>

* ## 원시 타입(Primitive type)의 깊은 복사(Deep copy)

```javascript
let a = 2;
let b = a; // 원시 타입의 깊은 복사

console.log(b); //2
console.log(a === b); //true

a = 10;

console.log(a === b); //false
console.log(b); //2
```

<br>

* ## 참조 타입(Reference type)의 얕은 복사(Shallow copy)

```javascript
//객체
const a = {
 ko : '안녕하세요',
 en : 'hello'
};
let b = a;
console.log(b); // {ko: '안녕하세요', en: 'hello'}

b.ko = '이게 얕은 복사인가?';

console.log(a); // {ko: '이게 얕은 복사인가?', en: 'hello'}
console.log(b); // {ko: '이게 얕은 복사인가?', en: 'hello'}

console.log(a === b); // true


//배열
let a = [1,2,3,4,5];
let b = a;

console.log(b); // [1,2,3,4,5]

b.push('song');

console.log(a); // [1,2,3,4,5,'song']
```


<br>

* ## 참조 타입(Reference type)의 깊은 복사(Deep copy)
  * JSON.stringify, JSON.parse 이용
  * spread 문법 이용
  * Array.prototype.slice  이용 -> 배열만 해당
  * Object.assign 이용 -> 객체만 해당
  * 재귀 함수 이용
  * lodash 라이브러리 이용

<br>

## 결론
  * 중첩 객체나 배열, 함수면 lodash 라이브러리 이용
  * 중첩이 아니면 spread 문법, Array.prototype.slice , Object.assign 중 잘 골라쓰자.

<br>

1. ### **JSON.stringify, JSON.parse 이용**
     * JSON.stringify()로 문자열로 바꾸고 JSON.parse()로 다시 변환하기 때문에 주소 참조가 사라진다.
     * 중첩 배열, 중첩 객체도 복사 가능하다
     * 다른 복사 방법에 비해 성능이 느리다.
     * JSON.stringify()가 함수 만나면 undefined로 처리한다.
```javascript
//배열
let arr = [8,7,4,6,[1,2,3,[777]]];
let copyArr = JSON.parse(JSON.stringify(copyArr)); // 복사 완료


//객체
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copyObj = JSON.parse(JSON.stringify(obj)); // 복사 완료


//JSON.stringify()가 함수 만나면 undefined로 처리한다.
const obj = {
  a: 1,
  b: {
    c: 2,
  },
  testFunction: function() {
      return this.a;
  }
};

const copyObj = JSON.parse(JSON.stringify(obj));

console.log(copyObj); // {a: 1, b: {c: 2}}
console.log(copyObj.func); // undefined
```

2. ### **spread 문법 이용**
     * 중첩 배열, 중첩 객체는 깊은 복사 불가능하고 얕은 복사로 진행된다. 
```javascript
// 1차원은 깊은 복사 가능하다.
let arr = [8, 7, 4, 6, 'song'];
let copyArr = [ ...arr ]; 

console.log(arr); //[ 8, 7, 4, 6, 'song' ]
console.log(copyArr); // [ '깊은 복사', 7, 4, 6, 'song' ]


//2차원 이상 배열은 얕은 복사로 진행된다.
let arr = [[8,7,4,6],['song','han'] ];
let copyArr = [...arr];

copyArr[0][1] = '얕은 복사'

console.log(arr);// [8, '얕은 복사', 4, 6] ['song', 'han']
console.log(copyArr);//[8, '얕은 복사', 4, 6] ['song', 'han']


//객체 역시 같은 결과
let obj = {a: 1, b: 2, c: 3};
let copyObj = { ...obj };

copyObj.a = '깊은 복사'

console.log(obj);//{ a: 1, b: 2, c: 3 }
console.log(copyObj);//{ a: '깊은 복사', b: 2, c: 3 }

//중첩 객체
let obj = {a: {b: 1}, c: 2};
let copyObj = { ... obj };

obj.a.b = '얕은 복사'

console.log(obj);//{ a: { b: '얕은 복사' }, c: 2 } 
console.log(copyObj);//{ a: { b: '얕은 복사' }, c: 2 }
```

3. ### **Array.prototype.slice**
   * 배열만 가능하다.
   * 2차원 이상 배열은 얕은 복사로 이루어진다.
```javascript
let arr = [8, 7, 4, 6, 'song'];
let copyArr = arr.slice();

copyArr[1] = '깊은 복사'

console.log(arr);//[ 8, 7, 4, 6, 'song' ]
console.log(copyArr);//[ 8, '깊은 복사', 4, 6, 'song' ]

//2차원 이상 배열은 얕은 복사가 진행된다.
let arr = [[8,7,4,6], ['song','sang']];
let copyArr = arr.slice();

copyArr[0][1] = '얕은 복사'

console.log(arr);//[ [ 8, '얕은 복사', 4, 6 ], [ 'song', 'sang' ] ]
console.log(copyArr);//[ [ 8, '얕은 복사', 4, 6 ], [ 'song', 'sang' ] ]
```

4. ### **Object.assign 이용**
    * 객체만 가능하다.
    * 중첩 객체는 얕은 복사가 이루어진다.
    * Object.assign(생성할 객체, 복사할 객체) 이렇게 첫번째 인수로 빈 객체를 넣어준다.

```javascript
let obj = {a: 1, b: 2, c: 3};
let copyObj = Object.assign( {}, obj );

obj.a = '깊은 복사'

console.log(obj);//{ a: '깊은 복사', b: 2, c: 3 }
console.log(copyObj);//{ a: 1, b: 2, c: 3 }

//중첩 객체는 얕은 복사가 이루어진다.
let obj = {a: {b:2}, c: 3};
let copyObj = Object.assign( {}, obj );

obj.a.b = '얕은 복사'

console.log(obj);//{ a: { b: '얕은 복사' }, c: 3 }
console.log(copyObj);//{ a: { b: '얕은 복사' }, c: 3 }
```

5. ### **재귀 함수 이용**
   * 직접 함수를 만들어서 깊은 복사를 하는 것
   * lodash 라이브러리를 이용하면 더 쉽게 할 수 있다.
```javascript
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    let copy = {};
    for (let key in obj) {
      copy[key] = deepCopy(obj[key]);
    }
    return copy;
  }
  
const obj = { a: 1, b: {c: 2,}, func: function () {return this.a;}, };
  

const copyObj = deepCopy(obj);

copyObj.b.c = '깊은 복사';

console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(copyObj); // { a: 1, b: { c: '깊은 복사' }, func: [Function: func] }
```

6. ### **lodash 라이브러리 이용**
   * npm i lodash 설치
```javascript
const lodash = require("lodash");

const obj = { a: 1, b: {c: 2,}, func: function () {return this.a;}, };

const copyObj = lodash.cloneDeep(obj);

copyObj.b.c = '깊은 복사';

console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(copyObj); // { a: 1, b: { c: 깊은 복사' }, func: [Function: func] }
```


<br><br>


## 2차원 배열 초기화
```javascript
let dy = Array.from(Array(3), ()=>Array(5).fill(0));

// [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]
```
