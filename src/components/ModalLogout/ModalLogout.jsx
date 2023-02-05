import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { closeModalAddTransaction, closeModalLogout } from 'redux/global/slice';
import { clearTransactions } from 'redux/transactions/slice';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { ModalWrapper, ModalTitle, ButtonsWrapper } from './ModalLogout.styled';
import Button from 'components/UI/Button/Button';

export default function ModalLogout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        dispatch(closeModalLogout());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModalLogout());
    }
  };

  const onLogoutBtnClick = () => {
    dispatch(clearTransactions());
    dispatch(closeModalAddTransaction());
    dispatch(closeModalLogout());
    dispatch(logOut());
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWrapper>
        <ModalTitle>Are you sure you want to exit?</ModalTitle>
        <ButtonsWrapper>
          <Button type="button" onClick={onLogoutBtnClick}>
            Yes
          </Button>
          <Button
            type="button"
            secondary="true"
            onClick={() => dispatch(closeModalLogout())}
          >
            No
          </Button>
        </ButtonsWrapper>
      </ModalWrapper>
    </Backdrop>
  );
}
