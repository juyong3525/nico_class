def plus(a=0, b=0):
    return int(a) + int(b)


def minus(a=0, b=0):
    return int(a) - int(b)


def times(a=1, b=1):
    return int(a) * int(b)


def div(a=1, b=1):
    if (b == 0):
        return f"Error : You can't divide by zero!!"
    else:
        return int(a) / int(b)


def neg(a=0):
    return -int(a)


def pow(a=1, b=1):
    return int(a) ** int(b)


def reminder(a=1, b=1):
    if (b == 0):
        return f"Error : You can't divide by zero!!"
    else:
        return int(a) % int(b)


r_plus = plus(1, "2")
r_minus = minus("2", 4)
r_times = times("3", "6")
r_div = div(6, 0)
r_neg = neg(7)
r_pow = pow(2, 10)
r_reminder = reminder(8, 3)


print(r_plus)
print(r_minus)
print(r_times)
print(r_div)
print(r_neg)
print(r_pow)
print(r_reminder)
