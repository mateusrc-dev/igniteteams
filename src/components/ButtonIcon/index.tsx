import { Container, ButtonIconTypeProps, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeProps;
  name?: keyof typeof MaterialIcons.glyphMap; // glyphMap oferece os icons que tem dentro de MaterialIcons, e vamos definir os tipos baseado nisso
};

export function ButtonIcon({
  type = "PRIMARY",
  name = "home",
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Icon type={type} name={name} />
    </Container>
  );
}
