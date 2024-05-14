function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i <= score.length - m; i = i + m) {
        // 현재 부분 배열을 자릅니다.
        let subArray = score.slice(i, i + m);
        answer=answer+Math.min(...subArray)*m
        // 결과 배열에 추가합니다.
        
    }   

    return answer;
}
