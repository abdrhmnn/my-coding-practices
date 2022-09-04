# kita bisa membaca dan mengelola file di python dgn bantuan fungsi open

data = open('data latihan/data1.txt', 'x')
# print(data.read())
# dataLists = data.readlines()
# print(dataLists)

# menulis atau menambahkan ke dalam file
data.write('\nAbdu')
data.close()
