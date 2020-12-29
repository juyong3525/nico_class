def plus(a=0, b=0):
    if type(a) != int and type(a) != float:
        return f"Error"
    elif type(b) != int and type(b) != float:
        return f"Error"
    else:
        return a + b


# print(plus(1, 2))
# print(plus("1", 2))
# print(plus(1, "2"))


def age_check(age):
    print(f"You are {age}")
    if age < 19:
        print("You can't drink")
    elif age == 19:
        print("You are new to this!")
    elif age > 20 and age < 30:
        print("You are still young!")
    else:
        print("enjoy your drink.")


age_check(18)
