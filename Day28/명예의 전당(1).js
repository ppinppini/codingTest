function solution(k, score) {
    let arr=[]
    let answer;
    let result=[]
    for(let i=0; i<score.length ; i++){
        arr.push(score[i])
        arr.sort((a,b)=>(a-b)*-1)
        answer=arr.slice(0,k)
        console.log(answer);
        result.push(answer[answer.length-1])
       
       
    } 
    
    return result
}
console.log(solution(3,[10, 100, 20, 150, 1, 100, 200]));