import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import registerTablet1x from '../../images/pics/registerBg-tablet-1x.png';
import registerTablet2x from '../../images/pics/registerBg-tablet-2x.png';
import registerDesk1x from '../../images/pics/registerBg-desktop-1x.png';
import registerDesc2x from '../../images/pics/registerBg-desktop-2x.png';
import {
  Content,
  LeftSide,
  RightSide,
  MainTitle,
} from '../LoginPage/LoginPage.styled';
import Background from 'components/UI/Background/Background';

export default function RegisterPage() {
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
              srcSet={`${registerDesk1x} 1x, ${registerDesc2x} 2x`}
              media="(min-width: 1280px)"
              type="image/jpg"
            />
            <source
              srcSet={`${registerTablet1x} 1x, ${registerTablet2x} 2x`}
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src={`${registerTablet2x}`} alt="finance wallet app" />
          </picture>
          <MainTitle>Finance app</MainTitle>
        </LeftSide>
        <RightSide>
          <RegistrationForm />
        </RightSide>
      </Content>
    </Background>
  );
}
