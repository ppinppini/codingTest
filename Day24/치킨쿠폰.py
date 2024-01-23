def solution(chicken):
    coup = chicken
    service = 0
    
    while coup >= 10:
        service += coup // 10
        coup = coup % 10 + coup // 10

    return service