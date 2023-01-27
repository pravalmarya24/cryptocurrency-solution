import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

// Write your JS code here

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoader: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({cryptoList: formattedData, isLoader: false})
  }

  render() {
    const {cryptoList, isLoader} = this.state
    return (
      <div className="Cryptocurrency-Tracker-bg-container">
        {isLoader ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="Cryptocurrencies-card-container">
            <h1 className="Cryptocurrency-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-img-size"
            />
            <div className="cryptoItem-container">
              <div className="heading-container">
                <h1 className="coin-heading">Coin Type</h1>
                <div className="usd-euro-name-container">
                  <p className="usd-para">USD</p>
                  <p className="euro-para">EURO</p>
                </div>
              </div>
              <ul className="unorderedList">
                {cryptoList.map(eachListItem => (
                  <CryptocurrencyItem
                    eachCurrency={eachListItem}
                    key={eachListItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
