import random

nama = ['abdu', 'eunha', 'umji', 'yerin', 'sowon']
namaBawah = 0
namaAkhir = len(nama) - 1
undiNama = random.randint(namaBawah, namaAkhir)
pemenang = nama[undiNama]
print(pemenang)
