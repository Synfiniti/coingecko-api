import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    console.log(res.data);
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          placeholder="Search a Coin"
          type="text"
          className="form-control bg-dark text-white border-0 mt-4 text-center" onChange={ e=> setSearch(e.target.value)}
        />
        <h1>Coin market</h1>
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
