import math

def solution(n):
    a=int(math.sqrt(n))
    if a*a==n:
        answer=1
    else: 
        answer=2
    return answer