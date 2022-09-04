# untuk mengelola error yang kita dapatkan

# untuk kode program yg berpotensi akan terjadi error bisa dibungkus dgn block try and except
try:
    angka = int(input('Masukan angka : '))
    print(angka)
    print(abdu)
except NameError:
    print('Salah nama')
except ValueError:  # kita tulis error yang ingin ke kelola itu apa, disni misal kita kelola ValueError
    print('Yang kamu masukan bukan angka!')

# jika ingin memasukan nama error secara general, maka
except:
    print('Terjadi kesalahan!')
