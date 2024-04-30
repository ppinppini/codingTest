function solution(number, limit, power) {
    let answer = 0;
    for (let k = 1; k <= number; k++) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(k); i++) {
            if (k % i == 0) {
                if (k / i == i) {
                    count++;
                } else {
                    count = count + 2;
                }
            }
        }
        if (count > limit) {
            count = power;
        }
        answer = answer + count;
    }

    return answer;
}
