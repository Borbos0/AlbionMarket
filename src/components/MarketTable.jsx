import React from "react";

const MarketTable = ({ marketData }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Название предмета</th>
          <th>Город</th>
          <th>Качество</th>
          <th>Мин. цена</th>
          <th>Макс. цена</th>
          <th>Автопокупка</th>
        </tr>
      </thead>
      <tbody>
        {marketData.length > 0 ? (
          marketData.map((item, index) => (
            <tr key={index}>
              <td>{item.item_id}</td>
              <td>{item.city}</td>
              <td>{item.quality}</td>
              <td>{item.sell_price_min}</td>
              <td>{item.sell_price_max}</td>
              <td>{item.buy_price_max}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">Нет данных</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MarketTable;
