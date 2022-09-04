nama = "Abdu \"rahman\""
nama = "Abdu\trahman"
print(nama)
print(nama[-3])

# bisa juga ambil data string berdasarkan rentang tertentu
print(nama[0:3])
# jika kek gini berarti yg belakang akan diambil string yg paling terakhir
print(nama[0:])


# Formartted string
first_name = 'abdu'
last_name = 'rahman'
# kuncinya tambahkan huruf f didpn string nya
name = f"{first_name} {last_name}"
print(name)

# string function
# len -> count string characters
print(len(first_name))

# string method
# upper and lower -> to transform upper case string
print(first_name.upper())
# capitalize -> transform first char in word to upper case
# title -> transform first char of each word to upper case
# replace -> change string

print(first_name in last_name)  # for checking a string if in another string
# print(f"Hasilnya adalah {(10 < 2) ? 'true' : 'false'}")
