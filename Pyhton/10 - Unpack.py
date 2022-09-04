# adalah membagikan tiap" element didalam list or tuple ke msng" variable secara otomatis
numbers = [0, 20, 30, 15]
x, y, z, _ = numbers  # _ dianggap sebuah variable yg tidak akan digunakan
x, *y = numbers  # artinya elemen pertama akan msk ke x sisanya msk ke y
print(z)
