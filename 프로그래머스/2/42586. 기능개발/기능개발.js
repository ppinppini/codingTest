function solution(progresses, speeds) {
    let answer =[]
    let remain= progresses.map((item,index)=>Math.ceil(((100-progresses[index])/speeds[index])))
    let current = remain [0]
    let count = 1
    
    for(let i =1; i<remain.length ; i++){
        if(remain[i] <= current){
            count ++ ;
        }else{
            answer.push(count)
            current =remain[i]
            count = 1
        }
    }
    answer.push(count);
    return answer
}