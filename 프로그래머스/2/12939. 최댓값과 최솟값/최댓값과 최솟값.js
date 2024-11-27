function solution(s) {
    let arr3=[]
    let arr2=[]
    let arr=s.split(' ')
    for (let i=0; i<arr.length; i++){
        arr2.push(Number(arr[i]))
    }
    let max=Math.max(...arr2)
    let min=Math.min(...arr2)
    arr3.push(min)
    arr3.push(max)
    let answer=arr3.join(' ')
    
    return answer;
}