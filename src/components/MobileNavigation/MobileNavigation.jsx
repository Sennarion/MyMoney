import { Nav, NavItem, Icon } from './MobileNavigation.styled';
import { IoStatsChart, IoHome } from 'react-icons/io5';
import { BsCurrencyExchange } from 'react-icons/bs';

export default function MobileNavigation() {
  return (
    <Nav>
      <NavItem to="/">
        <Icon>
          <IoHome size={20} />
        </Icon>
      </NavItem>
      <NavItem to="/diagram">
        <Icon>
          <IoStatsChart size={20} />
        </Icon>
      </NavItem>
      <NavItem to="/currency">
        <Icon>
          <BsCurrencyExchange size={20} />
        </Icon>
      </NavItem>
    </Nav>
  );
}
