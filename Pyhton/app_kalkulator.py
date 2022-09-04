isPlay = True
print('Ketik \'exit\', jika ingin keluar dari aplikasi')
while isPlay:
    operation = input('Masukan operasi matematika ( + , - , / , * ) : ')
    if operation != "exit" and operation != "+" and operation != "-" and operation != "/" and operation != "*":
        print('Operasi tidak dikenali')
        continue  # fungsi continue utk mengulang kembali looping dari awal dan tidak akan menjalankan kode program dibawahnya
    elif operation == "exit":
        break
    firstNumber = int(input('Angka Pertama : '))
    secondNumber = int(input('Angka Kedua : '))

    if operation == "+":
        print(f"Hasil : {firstNumber + secondNumber}")
    elif operation == "-":
        print(f"Hasil : {firstNumber - secondNumber}")
    elif operation == "/":
        print(f"Hasil : {firstNumber // secondNumber}")
    elif operation == "*":
        print(f"Hasil : {firstNumber * secondNumber}")

print('Terima kasih sudah bermain!')
