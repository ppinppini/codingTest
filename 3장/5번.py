scores = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]  # A 학급의 중간고사 점수 리스트
sum = 0  # 총 합을 저장할 변수

for score in scores:
    sum = sum + score  # A 학급 학생들의 중간고사 점수를 모두 더함

average = sum / len(scores)  # A 학급의 중간고사 점수 평균
print(average)


