function solution(s) {
    let arr=s.split(' ').filter((item)=>item !== ' ').map((item)=>Number(item)).sort((a,b)=>a-b)
    return String(arr[0])+' '+String(arr[arr.length-1]);
}

console.log(solution("-1 -2 -3 -4"));
