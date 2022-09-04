// bisa membuat di file yg terpisah untuk setiap action
// karena disini hanya menggunakan dua action saja maka dibuat dlm satu file

// action adalah sebuah function yang mengembalikan action dan dikirim ke reducers

export const depositMoney = (amount) => {

    // mengembalikan function dan menambahkan dispatch sebagai callback function as objek
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}