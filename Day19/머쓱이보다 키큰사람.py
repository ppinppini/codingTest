def solution(array):
    answer=''
    count=0
    for i in array:
        answer=answer+str(i)
    for j in list(answer):
        if '7' ==j:
            count+=1
    return str(array)
print(solution([7, 77, 17]))