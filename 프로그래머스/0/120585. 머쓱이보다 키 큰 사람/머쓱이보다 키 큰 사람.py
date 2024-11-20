def solution(array, height):
    answer = 0
    
    for i in array:
        if height < i:
            answer = answer + 1
        else:
            answer = 0
            
    return answer