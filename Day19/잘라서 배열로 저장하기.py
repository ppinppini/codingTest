def solution(my_str, n):
    answer = []
    for i in range(0,len(my_str),n):
        answer.append(my_str[i:i+n])
    return len(my_str)

print(solution("abc1Addfggg4556b",6))