import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import {
  CurrancyWrapper,
  TableWrapper,
  LoaderWrapper,
  Table,
  TableHead,
  TableHeadData,
  TableBodyData,
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
    <CurrancyWrapper>
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
                  <TableBodyData>{rate.code}</TableBodyData>
                  <TableBodyData>{Number(rate.buy).toFixed(2)}</TableBodyData>
                  <TableBodyData>{Number(rate.sell).toFixed(2)}</TableBodyData>
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
                    <TableBodyData>{coin.name}</TableBodyData>
                    <TableBodyData>
                      {Number(coin.current_price).toFixed(2)}
                    </TableBodyData>
                    <TableBodyData>
                      {Number(coin.price_change_24h).toFixed(2)}
                    </TableBodyData>
                  </tr>
                ))}
          </tbody>
        </Table>
      </TableWrapper>
    </CurrancyWrapper>
  );
}
