let nama = "eunha"
let word = /abdu|abd|man/
console.log(word.test(nama))

let nama2 = "eunha dan UMJI"
let word2 = /umji/i
console.log(word2.test(nama2))

let nama3 = "yohohoho"
let word3 = /hoho/i
console.log(nama3.match(word3).length)

let nama4 = "abdu12 ba2du du4ab ab22du b53adu u26dba"
let word4 = /abdu/ig
let word5 = /..du/ig
let word6 = /[uba]/ig
let word7 = /[a-b]du/ig
let word8 = /[a-b2-8]du/ig
let word9 = /[^1-6^f-z]/ig
let word10 = /[b+]/ig
let word11 = /[bdu*]/
console.log(nama4.match(word4))
console.log(nama4.match(word5))
console.log(nama4.match(word6).length)
console.log(nama4.match(word7))
console.log(nama4.match(word8))
console.log(nama4.match(word9).length)
console.log(nama4.match(word10).length)
console.log(nama4.match(word11))