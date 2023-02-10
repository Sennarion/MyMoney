import axios from 'axios';

const instancePrivat = axios.create({
  baseURL: 'https://ewallet-api.onrender.com/api/currency?type=cash',
});

export const privatbankApi = {
  getExchangeRate() {
    return instancePrivat.get();
  },
};
