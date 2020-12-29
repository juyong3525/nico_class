# 슬라이싱
jumin = "960127-1234567"

print(f"성별 : {jumin[7]}")
print(f"생년 : {jumin[0:2]}")  # 0 부터 2 직전까지
print(f"월 : {jumin[2:4]}")
print(f"일 : {jumin[4:6]}")

print(f"생년월일 : {jumin[:6]}")  # 시작부분 생략 가능
print(f"뒤 7자리 : {jumin[7:]}")  # 끝부분 생략 가능
print(f"뒤 7자리 (뒤에부터) : {jumin[-7:]}")
# 뒤에서 7번째부터 끝까지 (맨끝자리수: -1)
