import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Maria Clara', 'Mateus']);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <ListEmpty 
              message="Que tal cadastrar a primeira turma?"
            />
          )}
      />

      <Button 
        title="Criar nova turma!"
        // type="SECONDARY"
      />
    </Container>
  );
}
