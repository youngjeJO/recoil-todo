const BASE_URL = 'https://api.coinpaprika.com/v1';
//api.coinpaprika.com/v1/coins/{coin_id}/ohlcv/historical
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function informaionData(coinId?: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export function priceData(coinId?: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 5;
  console.log(startDate);

  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end${endDate}`
  ).then((response) => response.json());
}
