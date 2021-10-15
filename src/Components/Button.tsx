import styled from 'styled-components';
import { colors } from '../theme';

export const Button = styled.div`
  padding: 8px;
  border: 1px solid ${colors.lightAccent};
  color: ${colors.lightAccent};
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  transition: all 200ms ease;
  cursor: pointer;

  :hover {
    background-color: ${colors.lightAccent};
    color: #fff;
  }

  :active {
    opacity: 0.6;
  }
`;
