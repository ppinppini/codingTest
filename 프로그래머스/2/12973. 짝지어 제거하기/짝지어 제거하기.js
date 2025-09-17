function solution(s){
let stack =[]

// 스택이 비어 있지 않고, 현재 문자와  스택의 맨 위 문자가 같으면
for(const c of s){
if(stack.length > 0 && stack[stack.length-1] === c){
   stack.pop()
   }else{
       stack.push(c)
   }
}
return stack.length ===0 ? 1 :0
}