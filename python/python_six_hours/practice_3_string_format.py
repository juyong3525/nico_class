# 문자열 포맷

# 방법 1
print("나는 %d 살입니다." % 24)  # %d는 정수만 가능
print("나는 %s을 좋아해요" % "파이썬")  # %s는 str을 의미
print("Apple은 %c로 시작해요" % "A")  # %c는 character(한글자)를 의미
# %s
print("나는 %s 살입니다." % 24)
print("나는 %s색과 %s색을 좋아해요" % ("빨강", "파랑"))

# 방법 2
print("나는 {}살입니다." .format(24))
print("나는 {}색과 {}색을 좋아해요" .format("빨강", "파랑"))
print("나는 {0}색과 {1}색을 좋아해요" .format("빨강", "파랑"))
print("나는 {1}색과 {0}색을 좋아해요" .format("빨강", "파랑"))

# 방법 3
print("나는 {age}살이며, {color}색을 좋아해요" .format(age="24", color="빨강"))
print("나는 {age}살이며, {color}색을 좋아해요" .format(color="빨강", age="24"))

# 방법 4 (v3.6 이상)
age = 24
color = "빨강"
print(f"나는 {age}살이며, {color}색을 좋아해요")
