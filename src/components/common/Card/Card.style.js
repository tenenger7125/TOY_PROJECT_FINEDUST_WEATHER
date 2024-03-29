import styled from 'styled-components';

export const SLayout = styled.div`
  min-height: 141px;
  background: ${({ theme, bgColor, bgColorIdx }) => theme.colors[bgColor][bgColorIdx]};
  color: white;
  line-height: 2;

  cursor: pointer;
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SSido = styled.span`
  font-size: 1.5rem;
`;

export const SIconButton = styled.label`
  cursor: pointer;
`;

export const SMessage = styled.div`
  font-size: 1.7rem;
`;

export const SMese = styled.div`
  font-size: 1.4rem;
`;

export const SDataTime = styled.span`
  font-size: 1.7rem;
`;
