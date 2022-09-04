// bikin reducer yg merupakan function yg mengembalikan sebuah state
// ada dua parameter, 1 = initial state (nilai yg berada didalam store), 2 = partikular action
// yaitu data action yg dikirim yg biasanya berupa objek

const reducer = (initialState = 0, action) => {
    // read action dan mengembalikan state, biasanya pakai switch
    switch(action.type){
        case "deposit": // read the action name
            return initialState + action.payload; // doing the action that be writed in the action
        case "withdraw":
            return initialState - action.payload;
        default:
            return initialState;
    }
}

export default reducer;