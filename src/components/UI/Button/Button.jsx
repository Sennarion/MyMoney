import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/global/selectors';
import { Btn } from './Button.styled';

export default function Button({ children, ...props }) {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Btn disabled={isLoading} {...props}>
      {children}
    </Btn>
  );
}
