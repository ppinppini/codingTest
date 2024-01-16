def solution(quiz):
    result=[]
    for i in quiz:
        answer=i.split()
        if eval(''.join(answer[:3])) == int(answer[-1]):
            result.append('O')
        else:
            result.append('X')
    return result
