# Bitcoin Trading UI

This is a simple BTC/USD ticker. The current ticker price is fetched from the Bitfinex API. You can purchase BTC with USD up until you have spent all your money.


![alt text](https://github.com/radtrav/BitcoinTraderUI/blob/master/screenshots/Screen%20Shot%202018-04-09%20at%2012.25.07%20AM.png)


## Installation

```sh
npm install
npm run start
```

If you are running into cors issues install the google chrome cors plugin. The bitfinex api does not set the correct headers to access it from browser