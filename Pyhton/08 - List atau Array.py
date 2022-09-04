newList = ["Abdu", 10, True, 10.5, [10, "Rahman"]]
print(newList[4][0])
print(newList[0:3])
for e in newList:
    print(e)
print(newList.count(10))
newList.insert(4, "Eunha")
print(newList)

# menjumlahkan list
numbers = [10, 4, 22, 25]
print(sum(numbers))
print(max(numbers))
numbers.sort()
print(numbers[-1])
