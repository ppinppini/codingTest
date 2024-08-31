function solution(n) {
    let fibo = [0, 1];
    const rest = 1234567;

    for (let i = 2; i <= n; i++) {
        fibo[i] = (fibo[i - 2] + fibo[i - 1]) % rest;
    }

    return fibo[n];
}
