import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import {
  CurrencyWrapper,
  TableWrapper,
  LoaderWrapper,
  Table,
  TableHead,
  TableData,
  TableHeadData,
} from './Currency.styled';
import { privatbankApi } from 'services/privatbankApi';
import { cryptoApi } from 'services/cryptoApi';
import { theme } from 'styles/theme';

export default function Currency() {
  const [rates, setRates] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    privatbankApi.getExchangeRate().then(res => setRates(res.data));
    cryptoApi.getTrandindCoin().then(res => setCoins(res.data));
  }, []);

  return (
    <CurrencyWrapper>
      <TableWrapper>
        {rates.length === 0 && (
          <LoaderWrapper>
            <ThreeCircles
              color={theme.colors.accentGreen}
              innerCircleColor={theme.colors.accentBlue}
              ariaLabel="three-circles-rotating"
              height="70"
              width="70"
            />
          </LoaderWrapper>
        )}
        <Table>
          <TableHead>
            <tr>
              <TableHeadData>Currency</TableHeadData>
              <TableHeadData>Purchase</TableHeadData>
              <TableHeadData>Sale</TableHeadData>
            </tr>
          </TableHead>
          <tbody>
            {rates.length > 0 &&
              rates.map(rate => (
                <tr key={rate.code}>
                  <TableData>{rate.code}</TableData>
                  <TableData>{Number(rate.buy).toFixed(2)}</TableData>
                  <TableData>{Number(rate.sell).toFixed(2)}</TableData>
                </tr>
              ))}
          </tbody>
        </Table>
      </TableWrapper>

      <TableWrapper>
        {coins.length === 0 && (
          <LoaderWrapper>
            <ThreeCircles
              color={theme.colors.accentGreen}
              innerCircleColor={theme.colors.accentBlue}
              ariaLabel="three-circles-rotating"
              height="70"
              width="70"
            />
          </LoaderWrapper>
        )}

        <Table>
          <TableHead>
            <tr>
              <TableHeadData>Coin Name</TableHeadData>
              <TableHeadData>Currency in USD</TableHeadData>
              <TableHeadData>Price per day</TableHeadData>
            </tr>
          </TableHead>
          <tbody>
            {coins.length > 0 &&
              coins
                .filter(coin => coin.name !== 'Tether')
                .map(coin => (
                  <tr key={coin.id}>
                    <TableData>{coin.name}</TableData>
                    <TableData>
                      {Number(coin.current_price).toFixed(2)}
                    </TableData>
                    <TableData>
                      {Number(coin.price_change_24h).toFixed(2)}
                    </TableData>
                  </tr>
                ))}
          </tbody>
        </Table>
      </TableWrapper>
    </CurrencyWrapper>
  );
}
