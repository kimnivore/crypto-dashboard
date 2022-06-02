import React from 'react';
import styled from 'styled-components';


export default function Dashboard(props) {

    return (
        <DashboardContainer>
      
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
          
              {props.crypto
                .filter((item) => {
                  return item.name.toLowerCase().includes(props.search.toLowerCase());
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
        </DashboardContainer>
      );
    

}

const DashboardContainer = styled.div`
border: 1px solid red;

`