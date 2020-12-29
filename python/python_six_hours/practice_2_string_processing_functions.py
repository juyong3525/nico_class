# 문자열 처리 함수
python = "Python is Amazing"

print(python.lower())
print(python.upper())
print(python[0].isupper())
print(len(python))
print(python.replace("Python", "Java"))

index = python.index("n")
print(index)
index = python.index("n", index+1)
print(index)

print(python.find("Java"))  # 항목이 없을 경우 -1 출력 후 프로그램 계속 진행.
# print(python.index("Java"))  # 항목이 없을 경우 에러 출력 후 프로그램 중단.

print(python.count("n"))
