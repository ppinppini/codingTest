def solution(s):
    answer = 0
    new_s = s.split()

    while "Z" in new_s:
        index_Z = new_s.index("Z")
        del new_s[index_Z]
        if index_Z > 0:
            del new_s[index_Z - 1]

    for i in new_s:
        answer += int(i)

    return answer