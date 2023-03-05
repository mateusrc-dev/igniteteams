import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  // vamos somar as nossas tipagens a tipagem de TouchableOpacityProps para podermos acessar elas com ctrl + espaço - estamos fazendo a união entre tipos
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
