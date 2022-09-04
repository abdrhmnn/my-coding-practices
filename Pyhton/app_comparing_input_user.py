import random

compScore = random.randint(1, 100)
isPlay = True
while isPlay:
    userScore = int(input('Masukan angka : '))
    if userScore > 100:
        print('Angka terlalu besar!')
        continue
    elif userScore > compScore:
        print('Selamat Anda Menang!')
    else:
        print('Anda kalah!')
    playAgain = input('Main lagi (Y/N) ? ')
    if playAgain == "Y":
        continue
    elif playAgain == "N":
        isPlay = False
    else:
        print('Masukan keyword yang valid!')
print("Terima Kasih")
