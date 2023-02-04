import { Nav, NavItem, Icon, Text } from './DesktopNavigation.styled';
import { IoStatsChart, IoHome } from 'react-icons/io5';

export default function DesktopNavigation() {
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
    </Nav>
  );
}
