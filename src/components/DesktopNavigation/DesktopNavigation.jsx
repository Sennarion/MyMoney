import useMediaQuery from 'hooks/useMediaQuery';
import { IoStatsChart, IoHome } from 'react-icons/io5';
import { BsCurrencyExchange } from 'react-icons/bs';
import { Nav, NavItem, Icon, Text } from './DesktopNavigation.styled';

export default function DesktopNavigation() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <Nav>
      <NavItem to="/">
        <Icon>
          <IoHome />
        </Icon>
        <Text>Home</Text>
      </NavItem>
      <NavItem to="/diagram">
        <Icon>
          <IoStatsChart />
        </Icon>
        <Text>Statistics</Text>
      </NavItem>
      {!isDesktop && (
        <NavItem to="/currency">
          <Icon>
            <BsCurrencyExchange />
          </Icon>
          <Text>Currency</Text>
        </NavItem>
      )}
    </Nav>
  );
}
