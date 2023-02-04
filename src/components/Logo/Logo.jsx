import icons from '../../images/icons/icons.svg';
import { LogoWrapper, LogoImage, LogoText } from './Logo.styled';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <LogoWrapper as={Link} to="/">
      <LogoImage>
        <use href={`${icons}#icon-logo`}></use>
      </LogoImage>
      <LogoText>MyMoney</LogoText>
    </LogoWrapper>
  );
}
