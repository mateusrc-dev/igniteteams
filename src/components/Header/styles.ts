import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

type Props = {
  showBackButton?: boolean;
};

export const Container = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({showBackButton}) => showBackButton ? 'space-between' : 'center' };
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

// to make the icon a clickable region
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

// we put a non-standard component in parentheses to style it - used attrs to be able to define properties of an element
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
