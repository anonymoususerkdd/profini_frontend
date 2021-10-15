import vector from '../assets/headerBackground.svg';
import styled from 'styled-components';
import { H1 } from './Text';

export const VectorBackground: React.FC<{ title: string }> = ({
  children,
  title
}) => {
  return (
    <Outer>
      <InnerWrapper>
        {title && <Title>{title}</Title>}
        <Inner>{children}</Inner>
      </InnerWrapper>
    </Outer>
  );
};

const Title = styled(H1)`
  padding: 50px 0;
  margin: 0;
  font-size: 27px;
`;

const Outer = styled.div`
  height: inherit;
  width: inherit;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-size: contain;
`;

const InnerWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const Inner = styled.div`
  background-color: #fff;
  min-height: 1000px;
  border-radius: 40px;
  padding: 50px;
`;
