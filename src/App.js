import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=USD`)
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
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Price Change(1-day)</td>
            <td>Price Change(1-week)</td>
          </tr>
        </thead>
  
        <tbody>
      
          {crypto
            .filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item, id) => {
              return (
                <>
                  <tr key={item.id}>
                    <td className="rank">{item.rank}</td>
                    <td className="logo">
                      <a href={item.websiteUrl}>
                        <img src={item.icon} alt="logo" width="30px" />
                      </a>
                       
                    <p>{item.name}</p>
 
                    </td>
                    <td className="symbol">{item.symbol}</td>
                    <td>${item.marketCap.toFixed(2)}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.priceChange1d}%</td>
                    <td>{item.priceChange1w}%</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
 
export default App;