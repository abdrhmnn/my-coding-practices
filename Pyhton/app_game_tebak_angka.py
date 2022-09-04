from random import random
tryUser = 1
secretNumber = random()
limit = 3
isPlay = True
isConfirm = True

if secretNumber < 0.3:
    secretNumber = 1
elif secretNumber < 0.7:
    secretNumber = 2
else:
    secretNumber = 3

print("******* Selamat Datang *******")
print("Anda punya 3 kesempatan")
while isPlay:
    userInputNumber = int(input("Silahkan masukan angka dari 1 - 3 : "))

    if userInputNumber > 3:
        print("Silahkan masukan range angka yang valid!")
        while isConfirm:
            confirmToPlay = input('Mau main lagi (Y/N) ? ')
            if confirmToPlay == "Y":
                isConfirm = False
            elif confirmToPlay == "N":
                isConfirm = False
            else:
                print("Silahkan pilih Y (Yes) atau N (No)")
    else:
        if userInputNumber == secretNumber:
            print('Tebakan anda benar!, Selamat ✨✨')
            while isConfirm:
                confirmToPlay = input('Mau main lagi (Y/N) ? ')
                if confirmToPlay == "Y":
                    isConfirm = False
                    tryUser -= 1
                elif confirmToPlay == "N":
                    isConfirm = False
                    isPlay = False
                    tryUser = 0
                else:
                    print("Silahkan pilih Y (Yes) atau N (No)")
        else:
            print('Tebakan anda salah!')

        if tryUser == limit:
            print(
                f'Kesempatan anda telah habis!, angka tersembunyi nya adalah {secretNumber}')
            confirmToPlay = input('Mau main lagi (Y/N) ? ')
            if confirmToPlay == "Y":
                tryUser = 0
                isPlay = True
            elif confirmToPlay == "N":
                isPlay = False
        elif tryUser > 1:
            print('Ini kesempatan terakhir anda')

        tryUser += 1
print("******* Terima Kasih telah Bermain! *******")
