import DesktopNavigation from 'components/DesktopNavigation/DesktopNavigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { AsideWrapper, LeftSide } from './AsideWrapper.styled';
import useMediaQuery from 'hooks/useMediaQuery';

export default function Aside() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <AsideWrapper>
      <LeftSide>
        <DesktopNavigation />
        <Balance />
      </LeftSide>
      {isDesktop && <Currency />}
    </AsideWrapper>
  );
}
