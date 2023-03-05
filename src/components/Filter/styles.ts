import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};


// as we are going to pass typing let's put the element in parentheses
export const Container = styled(TouchableOpacity)<FilterStyleProps>`
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

// text-transform: uppercase - to force the text to always be in uppercase
export const Title = styled.Text`
  text-transform: uppercase; 
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
