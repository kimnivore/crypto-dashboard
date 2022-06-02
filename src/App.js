import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {

  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&currency=USD`)
    .then( res => {
      console.log(res)
      setCrypto(res.data.coins);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
          <input
            type="text"
            placeholder="Search Coin Name"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
      <Dashboard crypto={crypto} search={search} />

    </div>
  );
}
 
export default App;