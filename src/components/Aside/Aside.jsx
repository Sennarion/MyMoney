import useMediaQuery from 'hooks/useMediaQuery';
import { DesktopNavigation, Balance, Currency } from 'components';
import { AsideWrapper, LeftSide } from './AsideWrapper.styled';

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
