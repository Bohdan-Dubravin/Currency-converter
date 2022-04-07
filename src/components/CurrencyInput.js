import React from "react";

const CurrencyInput = (props) => {
  return (
    <div tabindex="0" className="currency_form">
      <input
        type="number"
        value={props.amount}
        onChange={(e) => props.handleChangeAmount(e.target.value)}
      />
      <select
        value={props.selectedCurrency}
        onChange={(e) => props.handleChangeCurrency(e.target.value)}
      >
        {props.allCurrencyes.map((selectedOption) => {
          return (
            <option key={selectedOption} value={selectedOption}>
              {selectedOption}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyInput;
