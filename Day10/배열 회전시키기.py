def solution(numbers, direction):
    answer = [] 
    temp = numbers[-1]
    
    if direction == "right":
        for i in range (0,len(numbers)):
            numbers[i]=numbers[i+1]
            answer.append(numbers[i])
        numbers[-1]=numbers[0]
        answer.append(temp)
        
    return answer

print(solution([[1, 2, 3]],"right"))