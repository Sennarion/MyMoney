import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const ButtonSelect = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  top: ${({ theme }) => theme.spacing(12)};
  left: 0;
  z-index: 1;
  width: 100%;
  max-height: ${({ theme }) => theme.spacing(75)};
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: ${({ theme }) => theme.spacing(4)};
`;

export const SelectItem = styled.li`
  cursor: pointer;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.white};
  }
`;
