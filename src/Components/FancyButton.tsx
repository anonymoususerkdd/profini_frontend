import styled from 'styled-components';

export const FancyButton: React.FC<{ onClick?: () => any; plain?: boolean }> =
  ({ children, onClick, plain }) => (
    <Outer onClick={onClick} plain={!!plain}>
      <Inner>{children}</Inner>
    </Outer>
  );

const Outer = styled.div<{ plain: boolean }>`
  text-decoration: none;
  width: calc(20vw + 6px);
  height: calc(8vw + 6px);
  ${p =>
    p.plain
      ? ''
      : `background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );`}
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 3vw;
  font-weight: bold;
  animation: slidebg 4s linear infinite;
  cursor: pointer;

  :hover {
    animation: slidebg 500ms linear infinite;
  }
`;

const Inner = styled.div`
  width: 20vw;
  height: 8vw;
  color: #fff;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 5s ease;
  text-align: center;

  :hover {
    background-color: transparent;
  }

  :active {
    transition: background-color 100ms ease;
    background-color: transparent;
  }
`;
