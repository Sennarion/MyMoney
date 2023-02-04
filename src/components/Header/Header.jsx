import { useSelector } from 'react-redux';
import { selectLogoutModalOpen } from 'redux/global/selectors';
import { Container } from 'components/UI/Container/Container.styled';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { HeaderWrapper, Content } from './Header.styled';
import Portal from 'components/UI/Portal/Portal';
import Logo from 'components/Logo/Logo';
import User from 'components/User/User';

export default function Header() {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);

  return (
    <HeaderWrapper>
      <Portal isVisible={isModalLogoutOpen}>
        <ModalLogout />
      </Portal>
      <Container>
        <Content>
          <Logo />
          <User />
        </Content>
      </Container>
    </HeaderWrapper>
  );
}
