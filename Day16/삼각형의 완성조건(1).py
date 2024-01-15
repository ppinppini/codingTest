def solution(sides):
    answer = 0
    long=max(sides)
    sides.remove(long)
    if sum(sides)>long :
        answer=1
    else:
        answer=2
    return answer