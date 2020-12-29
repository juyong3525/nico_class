days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun"]


print("Is Wed on 'days' list?")


def is_on_list(a):
    if a in days:
        print(True)
    else:
        print(False)


is_on_list("Wed")


def get_x(days, b):
    return days[b]


print("The fourth item in 'days' is: ")
if get_x(days, 3) in days:
    print(get_x(days, 3))
else:
    print("It is not in 'days'")


def add_x(days, Sat):
    return days.insert(5, "Sat")


add_x(days, "Sat")
print(days)


def remove_x(days, Mon):
    return days.remove("Mon")


remove_x(days, "Mon")
print(days)
