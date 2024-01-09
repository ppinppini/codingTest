import math

def solution(numbers, k):
    answer = (2*k-1)//3
    return math.ceil(answer)

print(solution([1,2,3],3))

