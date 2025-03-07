import React, { useState } from "react";
import ItemSelector from "./components/ItemSelector";
import LocationSelector from "./components/LocationSelector";
import QualitySelector from "./components/QualitySelector";
import MarketTable from "./components/MarketTable";
import axios from "axios";

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState(1);
  const [marketData, setMarketData] = useState([]);

  const fetchMarketData = async () => {
    if (selectedItems.length === 0 || selectedLocations.length === 0) return;
    
    const itemsQuery = selectedItems.join(",");
    const locationsQuery = selectedLocations.join(",");
    const qualityQuery = selectedQuality;

    const url = `https://europe.albion-online-data.com/api/v2/stats/prices/${itemsQuery}?locations=${locationsQuery}`;
    // &qualities=${qualityQuery}

    try {
      const response = await axios.get(url);
      setMarketData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных", error);
    }
  };

  return (
    <div>
      <h1>Отслеживание рынка Albion Online</h1>
      <ItemSelector selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      <LocationSelector selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} />
      {/* <QualitySelector selectedQuality={selectedQuality} setSelectedQuality={setSelectedQuality} /> */}
      <button onClick={fetchMarketData}>Получить данные</button>
      <MarketTable marketData={marketData} />
    </div>
  );
};

export default App;
