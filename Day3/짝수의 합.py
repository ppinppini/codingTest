def solution(n):
    answer=0
    if n%2==0 :
        for i in range(0,n+1,2):
            answer = answer+i

        return answer
    
    elif n%2==1 :
        for i in range(0,n,2):
            answer = answer+i 
        return answer;


        

    

print(solution(3))