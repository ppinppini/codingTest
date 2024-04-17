function solution(a, b) {

    let day=["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let dateStr="2016-"+ a +"- " +b;
    let date = new Date(dateStr)
    
    return day[date.getDay()];
}

