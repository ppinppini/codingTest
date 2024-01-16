def solution(num, k):
    str_num = str(num)
    answer = 0
    
    if str(k) in str_num:
        answer = str_num.index(str(k)) + 1
    else:
        answer = -1
    
    return answer
