function solution(s){

    if(s[0]===')'||s[s.length-1]==='(') return false
    return true

}
console.log(solution('())'));