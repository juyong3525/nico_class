def i():
    print("hello")


i()


def plus(a, b):
    return a + b


result = plus(5, 2)

print(result)


def say_hello(name, age, fav_food):
    return f"hello {name}! You are {age} years old. his favrite food is {fav_food}"


yong = say_hello(age="24", fav_food="pizza", name="yong")
print(yong)
