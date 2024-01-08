def solution(balls, share):
        facto = 1
        facto1 = 1
        facto2 =1 
        for i in range (1,balls+1):
            facto = facto * i
        for j in range (1,share+1):
            facto1= facto1 * j
        for k in range (1,balls-share+1):
            facto2 = facto2 *k
            
        return facto//(facto1*facto2)

print(solution(6,3))