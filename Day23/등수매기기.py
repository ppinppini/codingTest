def solution(score):
    avg = [sum(i)/2 for i in score] 
    arr = sorted(avg, reverse=True) 

    answer =[] 
    for i in avg:
        answer.append(arr.index(i)+1) 
    
    return answer