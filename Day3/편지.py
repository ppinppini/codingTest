def solution(message):
    list(message)
    count = 0
    for i in message:
        count = count+1
    return 2*count

print(solution("happy birthday!"))