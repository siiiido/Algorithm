# 배운 것 정리하기


* 투포인터 알고리즘
* 슬라이딩 윈도우 알고리즘
* 해쉬

<br><br>

## Map 객체 : 객체의 프로퍼티를 자주 변경해야할 때 사용
```javascript
sH.get(key, value); //객체 조회
sH.set(key, value); //객체에 삽입


let sH = new Map(); //객체 호출
sH.set("id",0);
sH.set("이름", "송상한");
sH.set("전공", "IT");
sH.set("나이",25);
console.log(sH); //Map(4) {'id' => 0, '이름' => '송상한', '전공' => 'IT', '나이' => 25}

//중복은 안된다.
sH.set("나이", 97);//Map(4) {'id' => 0, '이름' => '송상한', '전공' => 'IT', '나이' => 97}


//get으로 Map 객체 조회
console.log(sH.get("이름")) // 송상한

//delete로 삭제 : 삭제 성공하면 true, 실패하면 false
console.log(sH.delete("나이")); // true -> 삭제 성공
console.log(sH.delete("나이")); // false -> 삭제 할 것이 없으니 실패

//key 확인 있으면 true, 없으면 false
sH.has("이름"); // true -> key가 있으면 true 
sH.has("송상한"); // false



    
//Map 안의 프로터피 모두 삭제
sH.clear();


//for 반복문
let han = new Map();
han.set("id",0);
han.set("이름", "송상한");
han.set("전공", "IT");
han.set("나이",25);

for(let x of han){
    console.log(x);
}
/*
    ['id', 0]
    ['이름', '송상한']
    ['전공', 'IT']
    ['나이', 25]
*/


//key만 출력
for(let [x] of han){
    console.log(x);
}

/*
 id
 이름
 전공
 나이
*/

//key, value모두 출력
for(let [x,y] of han){
    console.log(x,y);
}
/*
 id 0
 이름 송상한
 전공 IT
 나이 25
*/


//2차원으로도 가능
let song = new Map([
    ["id", 0],
    ["이름", "송상한"],
    ["전공", "IT"],
    ["나이", 123]
]);
```


<br> <br>