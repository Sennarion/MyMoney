import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearError } from 'redux/auth/slice';
import { selectAuthErrorStatus } from 'redux/auth/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { LoginForm, Background } from 'components';
import { Content, LeftSide, RightSide, MainTitle } from './LoginPage.styled';
import loginTablet1x from '../../images/pics/loginBg-tablet-1x.png';
import loginTablet2x from '../../images/pics/loginBg-tablet-2x.png';
import loginDesk1x from '../../images/pics/loginBg-desktop-1x.png';
import loginDesc2x from '../../images/pics/loginBg-desktop-2x.png';

export default function LoginPage() {
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
