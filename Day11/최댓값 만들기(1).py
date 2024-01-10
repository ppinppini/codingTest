def solution(numbers):
    answer = []
    answer.append(max(numbers))
    numbers.remove(max(numbers))
    answer.append(max(numbers))
    numbers.remove(max(numbers))
    return answer[0]*answer[1]