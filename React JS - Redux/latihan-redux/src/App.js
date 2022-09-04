import logo from './logo.svg';
import './App.css';
// mengakses data store hrs import dulu special hooks redux
import { useSelector, useDispatch } from 'react-redux';
// useDispath ini utk mengambil dispatch data dari action creators

// bind action creators
import { bindActionCreators } from 'redux'
import { actionCreators } from './state_redux_file/index';

function App() {

  // param state merupakan state yg berada didalam store
  const stateAccount = useSelector((state) => state.account);

  // ambil data didalam callback function dispath di action creators
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h2>{stateAccount}</h2>
      <button onClick={() => depositMoney(1000)}>Increase</button>
      <button onClick={() => withdrawMoney(1000)}>Decrease</button>
    </div>
  );
}

export default App;
