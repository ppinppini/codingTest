def solution(s):
    answer = ''
    for i in s:
        if s.count(i)<2:
            answer=answer+i
            answer=''.join(sorted(answer))
    return  answer