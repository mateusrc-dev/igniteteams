import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState(""); // the initial state value is an empty string
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length !== 0) {
        await groupCreate(group); // calling function that saves data to storage
        navigation.navigate("players", { group }); // its houter have parameter, the typescript indicate error its not insering parameter 'group'
      } else {
        Alert.alert("Novo grupo", "Informe o nome da turma!");
      }
    } catch (error) {
      if (error instanceof AppError) {
        // verify if error is instance of 'AppError'
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
        />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
