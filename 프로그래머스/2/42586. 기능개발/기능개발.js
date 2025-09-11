function solution(progresses, speeds) {
    const answer = [];
    // 1. 각 기능별로 배포까지 남은 날짜를 계산합니다.
    const daysLeft = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );

    let count = 0; // 현재 배포 그룹에 포함된 기능의 수
    let maxDay = daysLeft[0]; // 현재 배포 그룹의 기준이 되는 최대 작업일

    for (let i = 0; i < daysLeft.length; i++) {
        // 2. 현재 작업의 완료일이 기준일보다 작거나 같으면 같은 그룹에 포함시킵니다.
        if (daysLeft[i] <= maxDay) {
            count++;
        } else {
            // 3. 현재 작업의 완료일이 더 길면, 이전까지의 그룹을 answer에 추가합니다.
            answer.push(count);
            // 4. 그리고 새로운 그룹을 시작합니다. (count=1, 기준일 변경)
            count = 1;
            maxDay = daysLeft[i];
        }
    }

    // 5. 반복문이 끝난 후, 마지막에 남아있는 그룹을 answer에 추가합니다.
    answer.push(count);

    return answer;
}