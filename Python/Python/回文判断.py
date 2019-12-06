


def check():
    strs = input(">")
    print("是回文") if strs == strs[::-1] else print("不是回文")

check()