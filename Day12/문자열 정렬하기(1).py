import re

def solution(my_string):
    answer=[]
    new_str=re.sub(r"[^0-9]", "",my_string)
    for i in new_str:
        answer.append(int(i))
    return sorted(answer)