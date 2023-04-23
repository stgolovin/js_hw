from datetime import datetime

def foo(n):
    n = int(n)
    global start_time 
    start_time = datetime.now()
    list = []
    i = 0
    while len(list) < n:
        flag = True
        if i == 0 or i == 1:
            i += 1
            continue
        for j in range(i+1):
            if j == 0 or j == 1 or j == i:
                continue
            if i % j == 0:
                flag = False
        if flag == True:
            list.append(i)
        i += 1
    return list


print(foo(n=input('Write: ')))
print(datetime.now() - start_time)

