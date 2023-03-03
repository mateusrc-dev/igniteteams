import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  // como vamos passar tipagem vamos colocar o elemento entre parênteses
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
      border-radius: 4px;
  `}
`;

export const Title = styled.Text`
  text-transform: uppercase; // para forçar o texto a sempre ficar em letras maiúsculas
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
