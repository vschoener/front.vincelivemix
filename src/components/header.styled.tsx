import styled from 'styled-components';

export const LogoWrapper = styled.div``;

export const LogoImage = styled.img`
  max-height: 48px;
  border-radius: 50%;
`;

export const LogoText = styled.span`
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;
