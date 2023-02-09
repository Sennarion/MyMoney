import {
  BackgroundWrapper,
  Circles,
  Circle,
  Content,
} from './Background.styled';

export default function Background({ children }) {
  return (
    <BackgroundWrapper>
      <Circles>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Circles>
      <Content>{children}</Content>
    </BackgroundWrapper>
  );
}
