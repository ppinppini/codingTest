function solution(n, arr1, arr2) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let hap = arr1[i] | arr2[i]; 
        let bin = hap.toString(2).padStart(n, '0');
        let answer = bin.replaceAll("1", "#").replaceAll("0", " ");
        arr.push(answer);
    }
    return arr;
}