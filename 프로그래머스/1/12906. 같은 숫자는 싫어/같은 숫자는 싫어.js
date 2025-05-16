function solution(arr){
    var answer=arr.filter((element,index)=>element !== arr[index+1] )
    return answer
};
