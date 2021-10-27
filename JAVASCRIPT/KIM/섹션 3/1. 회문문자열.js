function solution(s){
    let answer="YES";

    //case1 소문자로 다 변형 후 하나씩 비교
    s = s.toLowerCase();
    let len = s.length;
    
    //몫 만큼만 돌면된다!
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i] !== s[len-i-1]) return "NO";
    }


    //case2 reverse() 메서드 사용
    s = s.toLowerCase();
    // console.log(s.split('')); // 문자열이 배열에 하나씩 문자로 들어감 -> [ 'g', 'o', 'o', 'g' ] -> 이렇게 해야 reverse 메서드 사용가능(reverse메서드는 배열 메서드이다.)
    // console.log(s.split('').reverse()); // [ 'g', 'o', 'o', 'g' ]
    // console.log(s.split('').reverse().join('')); // goog

    if(s.split('').reverse().join('') !== s) return "NO";


    
    return answer;
}

let str="gooG";
console.log(solution(str));