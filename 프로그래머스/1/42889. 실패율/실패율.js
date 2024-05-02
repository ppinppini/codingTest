function solution(N, stages) {
    let answer = [];
    let players = stages.length;

    for (let i = 1; i <= N; i++) {
        let count = stages.filter(stage => stage === i).length;
        answer.push({ stage: i, failureRate: count / players });
        players -= count;
    }

    answer.sort((a, b) => {
        if (a.failureRate === b.failureRate) {
            return a.stage - b.stage;
        }
        return b.failureRate - a.failureRate;
    });

    return answer.map(obj => obj.stage);
}