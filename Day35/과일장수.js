function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i <= score.length - m; i = i + m) {
        let subArray = score.slice(i, i + m);
        answer=answer+Math.min(...subArray)*m
    }   

    return answer;
}
