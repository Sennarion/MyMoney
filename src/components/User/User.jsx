import { useDispatch } from 'react-redux';
import { openModalLogout } from 'redux/global/slice';
import { useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/selectors';
import { UserWrapper, UserName, LogoutBtn, LogoutText } from './User.styled';
import { IoLogOutOutline } from 'react-icons/io5';

export default function User() {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);

  return (
    <UserWrapper>
      <UserName>{username}</UserName>
      <LogoutBtn
        onClick={() => {
          dispatch(openModalLogout());
        }}
      >
        <IoLogOutOutline size={24} />
        <LogoutText>Exit</LogoutText>
      </LogoutBtn>
    </UserWrapper>
  );
}
