import './index.css'

// Write your JS code here
const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCurrency
  return (
    <li className="coin-list">
      <div className="coin-img-container">
        <img src={currencyLogo} alt={currencyName} className="img-size" />
        <p className="title-para">{currencyName}</p>
      </div>
      <div className="count-container">
        <p className="count_1">{usdValue}</p>
        <p className="count_2">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
