def solution(n):
    answer=[]
    answer1=[]
    
    for j in range (2,n+1):
        if n%j ==0:
            answer.append(j)
    for i in answer:
        is_prime=True
        for k in range(2,i):
            if i%k ==0 :
                is_prime =False
                break
    return answer1
            


        

