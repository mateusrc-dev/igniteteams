import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { useState, useCallback } from "react"; // useCallback is a hook whose purpose is to prevent a function from being executed unnecessarily
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native"; // useFocusEffect identify if screen have focus
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  // props have mothod navigation
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation(); // instancing this hook in memory

  function handleNewGroup() {
    navigation.navigate("new"); // in object navigation have method navigate - create navigation in pages
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchGroups() {
        try {
          const getGroups = await groupsGetAll();
          setGroups(getGroups);
        } catch (error) {
          console.log(error);
        }
      }
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button
        title="Criar nova turma!"
        onPress={handleNewGroup}
        // type="SECONDARY"
      />
    </Container>
  );
}
