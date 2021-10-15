import styled from 'styled-components';
import user_icon from '../assets/user_icon.png';

export const EmptyCard: React.FC<{name: string}> = ({ name }) => {
  return (
    <Container>
      <Image src={user_icon} />
      <NameTitle>{name}</NameTitle>
    </Container>
  );
};

const Container = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  height: 250px;
  border-radius: 16px;
  box-shadow: 5px 5px 10px 6px rgba(0,0,0,0.25);
  position: relative;
  grid-template-columns: 1fr;
  text-align: center;
`;

const NameTitle = styled.h3`
  align-self: start;
`;

const Image = styled.img`
  margin-top: 10px;
  justify-self: center;
  width: auto;
  max-height: 60%;
`;