import styled from "styled-components/native"; // vamos estilizar elementos para mobile

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
