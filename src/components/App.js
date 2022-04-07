import "./App.css";
import CurrencyInput from "./CurrencyInput";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const url =
    "http://data.fixer.io/api/latest?access_key=c2b6331e4e270746bc2b2c08f3cbce7a";

  const [amount1, setAmount1] = useState();
  const [amount2, setAmount2] = useState();
  const [currency1, setCurrency1] = useState("UAH");
  const [currency2, setCurrency2] = useState("USD");
  const [allRates, setAllRates] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setAllRates(response.data.rates);
    });
  }, []);

  function handleChangeAmount1(amount1) {
    setAmount2(
      ((amount1 * allRates[currency2]) / allRates[currency1]).toFixed(2)
    );
    setAmount1(amount1);
  }

  function handleChangeCurrency1(currency1) {
    setAmount2(
      ((amount1 * allRates[currency2]) / allRates[currency1]).toFixed(2)
    );
    setCurrency1(currency1);
  }

  function handleChangeAmount2(amount2) {
    setAmount1(
      ((amount2 * allRates[currency1]) / allRates[currency2]).toFixed(2)
    );
    setAmount2(amount2);
  }

  function handleChangeCurrency2(currency2) {
    setAmount1(
      ((amount2 * allRates[currency1]) / allRates[currency2]).toFixed(2)
    );
    setCurrency2(currency2);
  }

  return (
    <div>
      <Header currency={allRates} />
      <main className="main">
        <div className="container">
          <h3 className="currency_title">Currency Exchange</h3>
          <div className="wrapper">
            <CurrencyInput
              allCurrencyes={Object.keys(allRates)}
              selectedCurrency={currency1}
              amount={amount1}
              handleChangeAmount={handleChangeAmount1}
              handleChangeCurrency={handleChangeCurrency1}
            />
            <CurrencyInput
              allCurrencyes={Object.keys(allRates)}
              selectedCurrency={currency2}
              amount={amount2}
              handleChangeAmount={handleChangeAmount2}
              handleChangeCurrency={handleChangeCurrency2}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
