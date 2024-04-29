function solution(answers) {
    let answer = [];
    let count_1 = 0;
    let count_2 = 0;
    let count_3 = 0;
    let player_1 = [1, 2, 3, 4, 5];
    let player_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let player_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === player_1[i % player_1.length]) {
            count_1++;
        }
        if (answers[i] === player_2[i % player_2.length]) {
            count_2++;
        }
        if (answers[i] === player_3[i % player_3.length]) {
            count_3++;
        }
    }
    
  
    const maxScore = Math.max(count_1, count_2, count_3);
    
 
    if (maxScore === count_1) {
        answer.push(1);
    }
    if (maxScore === count_2) {
        answer.push(2);
    }
    if (maxScore === count_3) {
        answer.push(3);
    }
    
    return answer;
}
