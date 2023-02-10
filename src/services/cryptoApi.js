import axios from 'axios';

const instanceCrypto = axios.create({
  baseURL:
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false',
});

export const cryptoApi = {
  getTrandindCoin() {
    return instanceCrypto.get();
  },
};
