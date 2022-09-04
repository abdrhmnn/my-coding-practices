numbers = {
    "1": "Satu",
    "2": "Dua",
    "3": "Tiga",
    "4": "Empat",
    "5": "Lima",
    "6": "Enam",
    "7": "Tujuh",
    "8": "Delapan",
    "9": "Sembilan",
}
angka = input('Enter Number : ')

for n in angka:
    mapNumbers = numbers.get(n, "Invalid")
    print(mapNumbers, sep='', end=' ', flush=True)

# bisa juga cara dibawah ini :
# output = ""
# for n in angka:
#     mapNumbers = numbers.get(n, "Invalid")
#     output += mapNumbers + " "
# print(output)
