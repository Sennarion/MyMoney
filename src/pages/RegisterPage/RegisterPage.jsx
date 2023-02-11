import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearError } from 'redux/auth/slice';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectAuthErrorStatus } from 'redux/auth/selectors';
import { RegistrationForm, Background } from 'components';
import {
  Content,
  LeftSide,
  RightSide,
  MainTitle,
} from '../LoginPage/LoginPage.styled';
import registerTablet1x from '../../images/pics/registerBg-tablet-1x.png';
import registerTablet2x from '../../images/pics/registerBg-tablet-2x.png';
import registerDesk1x from '../../images/pics/registerBg-desktop-1x.png';
import registerDesc2x from '../../images/pics/registerBg-desktop-2x.png';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authErrorStatus = useSelector(selectAuthErrorStatus);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    navigate('/', { replace: true });
  }, [navigate, isLoggedIn]);

  useEffect(() => {
    if (authErrorStatus) {
      toast.error(`${authErrorStatus}`);
      dispatch(clearError());
    }
  }, [authErrorStatus, dispatch]);

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
