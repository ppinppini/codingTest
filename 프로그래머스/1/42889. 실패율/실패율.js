function solution(N, stages) {
    const ret ={}
    const arr =[]
    // 스테이지 별 실패율 구하기
    for (let i =1; i<=N ; i++){
        let challengers=stages.filter((item)=>item>=i).length
        let failures = stages.filter(item=>item===i).length
        //실패율
        const failRate= challengers==0 ? 0:failures /challengers
        arr.push({i,failRate})
        }
    arr.sort((a,b)=>{
        if(a.failRate!==b.failRate) return b.failRate-a.failRate
        return a.i-b.i
    })
    return arr.map(item=>item.i)
}