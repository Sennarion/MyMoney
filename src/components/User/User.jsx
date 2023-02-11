import { useDispatch } from 'react-redux';
import { openModalLogout } from 'redux/global/slice';
import { useSelector } from 'react-redux';
import { selectUsername } from 'redux/auth/selectors';
import { IoLogOutOutline } from 'react-icons/io5';
import { UserWrapper, UserName, LogoutBtn, LogoutText } from './User.styled';

export default function User() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

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
