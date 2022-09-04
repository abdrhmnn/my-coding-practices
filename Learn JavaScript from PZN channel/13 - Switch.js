// switch digunakan utk kasus sederhana dan hanya untuk kondisi ==

let nilai = 20
switch (nilai) {
    case 10:
        console.log('Sepuluh');
        break;
    case 20:
    case 50:
        console.log('Dua puluh dan lima puluh');
        break

    default:
        break;
}
console.log(typeof nilai)