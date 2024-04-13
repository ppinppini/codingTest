function solution(name, yearning, photo) {
    let obj = {};
    let answer = [];
    
  
    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    

    for (let j of photo) {
        let totalYearning = 0; 
        for (let k = 0; k < j.length; k++) {
            if (j[k] in obj) {
                totalYearning += obj[j[k]]; 
            }
        }
        answer.push(totalYearning); 
    }
    
    return answer;
}
