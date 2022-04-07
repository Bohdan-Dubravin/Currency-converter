import React from "react";

const Header = ({ currency }) => {
  const usd = ((1 * currency.UAH) / currency.USD).toFixed(2);
  const eur = ((1 * currency.UAH) / currency.EUR).toFixed(2);
  return (
    <header>
      <h3>Today's currency</h3>
      <div className="header_exchage-rate">
        <h4>USD {usd}</h4>
        <h4>EUR {eur}</h4>
      </div>
    </header>
  );
};

export default Header;
