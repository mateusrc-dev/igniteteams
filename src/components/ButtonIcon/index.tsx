import { Container, ButtonIconTypeProps, Icon } from "./styles"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeProps
}

export function ButtonIcon({type = "PRIMARY", ...rest}: Props) {
  return (
      <Container {...rest}>
        <Icon type={type} name="home" />
      </Container>
    )
}