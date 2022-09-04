// menggunakan core module node js utk web server, namanya http
const http = require('http')
const fs = require('fs')

const server = http.createServer((request, respon) => {

    // kasih tau ke node js utk respon yg dikembalikan type nya html
    respon.writeHead(200, {
        'Content-Type' : 'text/html'
    })
    
    // console.log(request.url);
    if(request.url === '/about'){
        respon.write('<h1>Hello About!</h1>')
        respon.end();
    }else if (request.url === '/contact'){
        respon.write('Hello Contact!')
        respon.end();
    }else{
        // ini cara utk mengload file html kita sendiri
        fs.readFile('./index.html', ((error, data) => {
            if(error){
                respon.writeHead(404)
                respon.write('page not found!')
            }else{
                respon.write(data) // data itu isi dari file yg dipilih
            }
            respon.end();
        })
    )}
})

// klo gak diisi port nya akan secara default menggunakan port 3000
// listen ini utk menjalakan web server
server.listen(3000, () => {
    // pesan ini akan muncul ketika server nya berhasil dijalankan
    console.log('Server is listening on port 3000');
})