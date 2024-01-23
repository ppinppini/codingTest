def solution(bin1, bin2):
    a=int(bin1,2)
    b=int(bin2,2)
    c=a+b
    d=str(bin(c))
    answer=d[2:]
    return answer
print(solution("10","11"))