function solution(s) {
    let items=s.toLowerCase().split(' ')
    let arr=[]
    for (item of items){
        if(item.charAt(0)===item.charAt(0).toLowerCase()){
           let newItem = item.charAt(0).toUpperCase() + item.slice(1)
            arr.push(newItem)
        }
    }
    return arr.join(' ')
}