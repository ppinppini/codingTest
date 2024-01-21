def solution(a, b):
    answer = 0
    c=a/b-(a//b)
    if c%10000*1 ==0:
        answer=1
    else:
        answer=2
    return answer

print(solution(12,21))