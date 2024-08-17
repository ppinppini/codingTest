function solution(n) {
    let answer=n+1
    let nBin = n.toString(2);
    let nCon =nBin.split("1").length-1
    
    while(true){
        let answerBin= answer.toString(2); 
        let answerCon= answerBin.split("1").length-1
        
        if(answerCon === nCon) {
            return answer
        }
        answer++
    }


    
    }

