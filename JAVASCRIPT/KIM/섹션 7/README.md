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