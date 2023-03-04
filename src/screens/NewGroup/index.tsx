import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState(""); // the initial state value is an empty string
  const navigation = useNavigation();

  function handleNew() {
    if (group.length !== 0) {
      navigation.navigate("players", { group }); // its houter have parameter, the typescript indicate error its not insering parameter 'group'
    } else {
      alert("Escreva o nome da nova turma!");
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
