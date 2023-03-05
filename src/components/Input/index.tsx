import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native"; // para conseguirmos usar o tema padrão fora do styled-components
import { TextInput } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
