import { Link } from 'react-router-dom';
import icons from '../../images/icons/icons.svg';
import { LogoWrapper, LogoImage, LogoText } from './Logo.styled';

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
