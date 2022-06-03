import React from 'react';
import styled from 'styled-components';


export default function Dashboard(props) {

    return (
        <DashboardContainer>
      
          <table>
            <thead className='head'>
              <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Symbol</td>
                <td>Market Cap</td>
                <td>Price</td>
                <td>Change - 1d</td>
                <td>Change - 1w</td>
              </tr>
            </thead>
      
            <tbody>
          
              {props.crypto
                .filter((item) => {
                  return item.name.toLowerCase().includes(props.search.toLowerCase());
                })
                .map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td className="rank">{item.rank}</td>
                        <td className="logo">
                          <a href={item.websiteUrl}>
                            <img src={item.icon} alt="logo"/>
                            <p>{item.name}</p>
                          </a>
                         
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
        </DashboardContainer>
      );
    

}

const DashboardContainer = styled.div`
margin: 20px;

.head {
    font-style: bold;
    font-size: 1.2rem;
}
td{ 
    border: 1px solid black;
    width: 200px;
}
img {
    width: 50px;
    margin: 0 10px;
}
p {
    margin-left: 20px;
}
.logo {
    display: flex;
    align-items: center;
}
a {
    display: flex;
    text-decoration: none;
}

`