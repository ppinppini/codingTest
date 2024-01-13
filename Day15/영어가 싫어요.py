def solution(numbers):
    arr=['zero','one','two','three','four','five','six','seven','eight','nine']
    for num, letter in enumerate(arr):
        numbers=numbers.replace(letter,str(num))
    answer=int(numbers)
    return answer



