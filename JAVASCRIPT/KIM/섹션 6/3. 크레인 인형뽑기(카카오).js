function solution(board, moves){
    let answer=0;

    //내가 푼 것
    // let stack = []

    // for(let x of moves){
    //     let pos = x
    //     for(let i=0; i<board.length; i++){
    //         //0 이 아닌 숫자가 있음
    //         if(board[i][pos -1]){
    //             //stack 마지막이랑 비교
    //             if(stack[stack.length-1] === board[i][pos -1] ){
    //                 answer+=2;
    //                 stack.pop();
    //                 board[i][pos -1] = 0
    //                 break;
    //             }else{
    //                 stack.push(board[i][pos -1]);
    //                 board[i][pos -1] = 0
    //                 break;

    //             }
    //         } 
    //     }
    // }




    //풀이
    let stack = [];
    moves.forEach(pos => {
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1] !== 0 ){

                let tmp = board[i][pos -1];
                board[i][pos -1] =0;

                if(tmp === stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                }
                else stack.push(tmp);

                break;
            }
        }
    });

    return answer;
}

// 0~4 (위에서 아래로)
let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));