function solution(s, n) {
    let arr = [];
 // 알파벳 대문자 추가
     for (let i = 65; i <= 90; i++) {
     arr.push(String.fromCharCode(i));
 }
     arr.forEach((e,i)=>{
        if(e!==' '){
            i=i+1
        }
     })
     return arr;
 }

