import { useSelector } from 'react-redux';
import { selectModalLogoutOpen } from 'redux/global/selectors';
import { Container, ModalLogout, Portal, Logo, User } from 'components';
import { HeaderWrapper, Content } from './Header.styled';

export default function Header() {
  const isModalLogoutOpen = useSelector(selectModalLogoutOpen);

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
