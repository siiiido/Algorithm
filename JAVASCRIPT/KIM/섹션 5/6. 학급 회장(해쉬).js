function solution(s){  
    let answer;
    
    // let n = s.length;
    // let container = [0,0,0,0,0];
    // let alphbet = ['A','B', 'C', 'D', 'E'];

    // // console.log(s.split(''));

    // for(let x of s){
    //     if(x === 'A') container[0]++
    //     else if(x === 'B') container[1]++;
    //     else if(x === 'C') container[2]++;
    //     else if(x === 'D') container[3]++;
    //     else if(x === 'e') container[4]++;
    // }

    // for(let i=0; i<n; i++){
    //     let max = container[0];
    //     if(container[i] > max ) answer = i;
    // }

    // answer = alphbet[answer];



    //해쉬
    let sH = new Map();
    for(let x of s){
        // sH 객체에 key가 존재하냐
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x,1); 
    }
    // console.log(sH); //Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let [key,val] of sH){

        // console.log(key, val);
        /*
            B 3
            A 3
            C 5
            D 2
            E 2
        */
       if(val > max){
           max = val;
           answer = key;
       }
    }

    for(let [hi, test] of sH){
        console.log(hi , " key");
        console.log(test , " test");
    }

    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));