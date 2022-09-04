import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter';
import { mulai } from './redux/time';
import { connect } from 'react-redux';  

function App() {
  
  // ambil variabel dari reducer tertentu
  const { count } = useSelector(state => state.counter)
  const { jam, menit, detik } = useSelector(state => state.waktu)

  // manggil action yg kita mau di dalam reducer
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <h2>{jam}:{menit}:{detik}</h2>
      <button onClick={() => dispatch(mulai())}>Mulai</button>
      <button>Stop</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.reducer.count
//   }
// }

export default App;
