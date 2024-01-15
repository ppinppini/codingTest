def solution(array):
    answer = []
    big=max(array)
    big_index=array.index(max(array))
    answer.append(big)
    answer.append(big_index)
    return answer