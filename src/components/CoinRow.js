import React from "react";

const CoinRow = ({ coin, index }) => {
  console.log(coin, index);
  return (
    <tr>
        <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{width: '6%'}} className="img-fluid me-4"/>
        <span>{coin.name}</span>
        <span style={{color: '#9b9b9b'}} className="ms-3 text-uppercase">{coin.symbol}</span>
        </td>
      <td>${coin.current_price}</td>
      <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
        {coin.price_change_percentage_24h}%
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
