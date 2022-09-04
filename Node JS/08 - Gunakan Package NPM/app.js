// console.log('hello world');

// package validator
const validator = require('validator')

// package chalk, utk mempercantik tulisan didalam log kita
const chalk = require('chalk')

// package nodemon, utk menjalankan program node js secara automatis
// jika intall secara lokal maka ubah konfigurasi npm start nya
// menjadi 'nodemon app'

console.log(validator.isEmail('abdu'))
console.log(validator.isMobilePhone('087785305729', 'id-ID'))

const log = console.log
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(`${chalk.bgRed('Abdu')} ${chalk.yellow.bold('Rahman')}`)
log(chalk`Yohohoho {bgGreenBright.red minaaaaa} yoroshikuuu`)
log(chalk`Yohohoho {bgRed.green minaaaaa} yoroshikuuu`)