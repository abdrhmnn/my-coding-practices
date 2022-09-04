# adalah sebuah struktur data yang dapat menyimpan sebuah key dan value
# didefinisikan dgn tanda kurung kurawal

users = {
    "name": "abdu",
    "age": 20,
    "isAdmin": True
}

print(users["name"])

# jika kita akses key yg tdk ada didalam sebuah dict maka akan error utk ngakalinnya pakai
# method get
users.get("rahman")
print(users.keys())
print(users.items())
print(users.values())
