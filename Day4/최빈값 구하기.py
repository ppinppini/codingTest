def solution(array):
    answer = 0
    common_array=[]
    for i in array:
        common_array.append(array.count(i))
        answer=common_array.index(max(common_array))
    if max(common_array)==min(common_array):
        if len(set(common_array))==1:
            return 1
        return -1
    else:
        return array[answer]
       
    

print(solution([1, 1, 4, 4, 1, 4]))


