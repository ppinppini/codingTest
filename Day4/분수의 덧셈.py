def solution(numer1, denom1, numer2, denom2):
    answer = []
    numer3 = numer1 * denom2 + numer2 * denom1
    denom3 = denom1 * denom2
    
    for i in range(numer3, 0, -1):
        if numer3 % i == 0 and denom3 % i == 0:         
            answer.append(numer3 // i)
            answer.append(denom3 // i)
            break
            
              
    
    return answer