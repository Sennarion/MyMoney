import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { Content, LeftSide, RightSide, MainTitle } from './LoginPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import loginTablet1x from '../../images/pics/loginBg-tablet-1x.png';
import loginTablet2x from '../../images/pics/loginBg-tablet-2x.png';
import loginDesk1x from '../../images/pics/loginBg-desktop-1x.png';
import loginDesc2x from '../../images/pics/loginBg-desktop-2x.png';
import Background from 'components/UI/Background/Background';

export default function LoginPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    navigate('/', { replace: true });
  }, [navigate, isLoggedIn]);

  return (
    <Background>
      <Content>
        <LeftSide>
          <picture>
            <source
              srcSet={`${loginDesk1x} 1x, ${loginDesc2x} 2x`}
              media="(min-width: 1280px)"
              type="image/jpg"
            />
            <source
              srcSet={`${loginTablet1x} 1x, ${loginTablet2x} 2x`}
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src={`${loginTablet2x}`} alt="finance wallet app" />
          </picture>
          <MainTitle>Finance app</MainTitle>
        </LeftSide>
        <RightSide>
          <LoginForm />
        </RightSide>
      </Content>
    </Background>
  );
}
