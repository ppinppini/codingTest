def solution(my_string):
    answer = ''
    for i in my_string:
        if i.isupper():
            answer= answer+i.lower()
        elif i.islower():
            answer=answer+i.upper()
    return answer