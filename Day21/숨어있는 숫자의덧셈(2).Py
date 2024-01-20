import re
def solution(my_string):
    numbers = re.sub(r'[^0-9]', '', my_string)
    return numbers


print(solution("abc123def456"))