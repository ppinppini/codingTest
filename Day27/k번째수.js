function solution(inputArray, commands) {
    let answer = [];
    
    for (let command of commands) {
        let start = command[0] - 1;
        let end = command[1];
        let index = command[2] - 1;
        
        let slicedSortedArray = inputArray.slice(start, end).sort((a, b) => a - b);
        answer.push(slicedSortedArray[index]);
    }
    
    return answer;
}
