// 유효성 검사(결정 알고리즘)
function count(songs, capacity){
    //dvd 1장이 있어서 cnt로 초기화
    let cnt =1, sum=0;
    for(let x of songs){
        if(sum+x > capacity){
            cnt++;
            sum = x;
        }else sum+=x;
    }
    return cnt;
}

function solution(m, songs){
    let answer;
    let lt = Math.max(...songs); // 단일 최댓값 찾기
    let rt = songs.reduce((a,b)=> a+b, 0); // arr 모두 더한 값
    while(lt <= rt){
        let mid = parseInt((lt + rt)/2);
        if(count(songs, mid) <= m){
            answer = mid;
            rt = mid -1;
        }else lt = mid+1 
    }

   
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));