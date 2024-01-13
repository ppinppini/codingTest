def solution(my_string, num1, num2):
    arr=list(my_string)
    num3=arr[num1]
    arr[num1]=arr[num2]
    arr[num2]=num3
    
    return ''.join(arr)

print(solution("hello",1,2))