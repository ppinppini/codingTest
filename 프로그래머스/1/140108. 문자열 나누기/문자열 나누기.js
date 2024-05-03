function solution(s) {
    let answer = [];
    let start = 0;
    let count = 0;
    let value = 0;
    let otherValue = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[start] === s[i]) {
            value += 1;
        } else {
            otherValue += 1;
        }

        if (value === otherValue) {
            count += 1;
            if (count == 1) {
                answer.push(s.slice(start, i+1));
                start = i + 1;
                count = 0;
                value = 0;
                otherValue = 0;
            }
        }
    }
    if (start < s.length && value !== otherValue) {
        answer.push(s.slice(start));
    }

    return answer.length;
}