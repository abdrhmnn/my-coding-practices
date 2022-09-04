// 1. HTML Fragments
// const mhs = {
//     nama: 'Abdu',
//     nim: '1223131',
//     umur: 20
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;


// ------------------------------------------------------------------------------------


// 2. Menggunakan Looping didalam HTML Fragments
const mhs = [{
    nama: 'Abdu',
    email: 'Abdu@gmail.com'
},
{
    nama: 'Eunha',
    email: 'Eunha@gmail.com'
},
{
    nama: 'Umji',
    email: 'Umji@gmail.com'
},
]


// Contoh Expression yang didalamnya terdapat Higher Order Function
const el = `<div class="mhs">
${mhs.map(m => `<ul>
<li>${m.nama}</li>
<li>${m.email}</li>
</ul>`).join('')} // method join ini utk menghilangkan tanda koma
</div>`
console.log(el);

document.body.innerHTML = el;


// --------------------------------------------------------------------------------------

// 3. Menggunakan pengkondisian didalam HTML Fragments
// dengan ternary
const lagu = {
judul: 'Learn to Meow',
penyanyi: 'Eunha',
feat: 'Umji'
}


// Jadi ini kita memasukkan penkondisian didalam Expression dengan menggunakan TERNARY OPERATOR
const al = `<div class="lagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${(lagu.feat) ? `(feat. ${lagu.feat})` : ''} </li> 
</ul>
</div>`


document.body.innerHTML = al;


// -----------------------------------------------------------------------------------------

// 4. Menggunakan Nested atau didalam HTML Fragments Bersarang
const mhs2 = {
nama: 'Abdu',
semester: 5,
matakuliah: ['Rekayasa Web', 'Pengantar Akuntasi', 'ABO']
}

// Jadi ini kita mengulang semua Elemen dari properti matakuliah yg dimasukkan kedalam Function lalu mengembalikan sebuah Template
// Literal
function cetakMatakuliah() {
return `
<ol type="A">
    ${mhs2.matakuliah.map(mk => `<li>${mk}</li>`).join('')}
</ol>`
}


const bl = `<div class="mhs">
<h2>${mhs2.nama}</h2>
<span class="semeste">Semester : ${mhs2.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMatakuliah()}
</div>`



// Contoh looping nya dengan Higher Order Function

// const bl2 = `<div class="mhs">
// <h2>${mhs2.nama}</h2>
// <span class="semeste">Semester : ${mhs2.semester}</span>
// <h4>Mata Kuliah :</h4>
// <ol>
// ${mhs2.matakuliah.map(mk => `<li>${mk}</li>`).join('')}
// </ol>
// </div>`

document.body.innerHTML = bl;
