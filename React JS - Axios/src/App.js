import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const api = axios.create({
  baseURL: '' // url endpoint API nya
})

function App() {

  const [data, setData] = useState([])

  axios.get('/').then(res => {
    console.log(res)
    setData(res.data) // data yg didapat dari API dpt di tampilkan kedalam UI
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
