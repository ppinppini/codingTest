function solution(priorities, location) {
    let answer = 0;
    const arr = priorities.map((item,idx)=>({item,idx}))
    
    while(arr.length){
    const cur= arr.shift()
    if(arr.some((x=>x.item > cur.item))){
        arr.push(cur)
    }else{
        answer++
        if(cur.idx === location ) return answer
    }
}
    return arr
    
}
//[A,B,C,D]
//[2,1,3,2]

