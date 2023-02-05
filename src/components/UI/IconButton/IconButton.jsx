import { Btn } from './IconButton.styled';

export default function IconButton({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>;
}
