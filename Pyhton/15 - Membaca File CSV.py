# import dulu modul csv
import csv

# data = open('data.csv')

# misal kita lupa menambahkan keyword close atau dibaris tertentu terjadi error sblm keyword
# close dijalankan, maka bisa gunakan keyword with

with open('data latihan/data.csv') as data:
    dataCSV = csv.reader(data, delimiter=',')
    print(dataCSV)  # hrs di looping

    for row in dataCSV:
        print(row)

# data.close() # kalo sudah ada with tidak perlu tambahkan close lagi
