import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #598392;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${rotation} 1s linear infinite;
`;
