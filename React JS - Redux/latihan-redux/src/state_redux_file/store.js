import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

// buat store, param pertama reducernya, param kedua default state
export const store = createStore(reducers, {}, applyMiddleware(thunk));

// tambahkan param ketiga untuk memberitahu redux bahwa akan ada action creators 
// yg berjalan secara asynchoronous