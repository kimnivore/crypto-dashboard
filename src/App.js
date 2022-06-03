import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import Dashboard from './components/Dashboard';
import './App.css';
import styled from 'styled-components';

function App() {

  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&currency=USD`)
    .then( res => {
      setCrypto(res.data.coins);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <AppContainer>
      <h1>Crypto Dashboard</h1>
      <input
        type="text"
        placeholder="Search Coin Name"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Dashboard crypto={crypto} search={search} />

    </AppContainer>
  );
}
 
export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
  text-align: center;

  input{
    width: 10%;
    height: 1.5rem;
    margin: auto;
    border: blue 1px solid;
  }
`