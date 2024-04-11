function solution(t, p) {
  //     1. 문자열 t 를 문자열 p 길이 만큼 자르기
  let answer;
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    answer = t.slice(i, i + p.length);
    console.log(answer);
    if (p > answer) {
        
      count += 1;
    }
  }

  return answer;
}
console.log(solution("3141592","271"));