import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity``; // para fazer com que o ícone se torna uma região clicável

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  // colocamos entre parênteses um componente que não é padrão para estilizar ele - usamos o attrs para poder definir propriedades de um elemento
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
