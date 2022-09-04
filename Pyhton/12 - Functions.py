# membuat fungsi di python pakai keyword def

nama = input('masukan nama : ')


def sayHello(nama, umur) -> str:
    print(f"Halo, {nama} umur saya {umur}")
    return 0


# jika kita salah passing argumen maka bisa kita kasih tau python
temp = sayHello(nama=nama, umur=20)
print(temp)

# kalo kita tambahkan return pada fuctions maka function tersebut kita hrs simpan kedalam
# variabel baru
