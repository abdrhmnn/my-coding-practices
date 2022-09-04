message = input(">>> ")
emojies = {
    ":(": "😜"
}

words = message.split(" ")
# print(words)
output = ""
# print(output + words[0])
for words in message:
    # jika tdk ada key maka akan dikembalikan elemen itu sendiri
    output = output + emojies.get(words, words)
    # print(messageIcon)
print(output)
