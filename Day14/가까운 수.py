def solution(array, n):
    array.sort()
    new_array=[]
    for i in array:
        new_array.append(abs(n-i))
    answer=[array[new_array.index(min(new_array))]]
        
    if len(answer)>1:
        return min(answer)
    else:
        return answer[0]