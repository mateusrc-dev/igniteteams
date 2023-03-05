import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native"; 
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState(""); // the initial state value is an empty string
  const navigation = useNavigation();

  async function handleNew() {
    if (group.length !== 0) {
      try {
        await groupCreate(group); // calling function that saves data to storage
        navigation.navigate("players", { group }); // its houter have parameter, the typescript indicate error its not insering parameter 'group'
      } catch (error) {
        console.log(error);
      }
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
