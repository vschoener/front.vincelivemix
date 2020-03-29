import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }

  30% {
    transform: translateY(-15px);
  }
`;

export const Container = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;

  > span {
    display:inline-block;
    width:12px;
    height:12px;
    border-radius:50%;
    margin-right:3px;
    background:#303131;
    animation: ${bounce} 1.3s linear infinite;
    
    &:nth-child(2) {
    animation-delay: -1.1s;
    }
    
    &:nth-child(3) {
    animation-delay: -0.9s;
    }
  }
`;
