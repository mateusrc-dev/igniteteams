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
import { Loading } from "@components/Loading";

export function Groups() {
  // props have mothod navigation
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation(); // instancing this hook in memory

  function handleNewGroup() {
    navigation.navigate("new"); // in object navigation have method navigate - create navigation in pages
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchGroups() {
        try {
          setIsLoading(true);
          const getGroups = await groupsGetAll();
          setGroups(getGroups);
        } catch (error) {
          console.log(error);
        } finally { // independenty if result success or error in fetch the groups, the loading stop
          setIsLoading(false);
        }
      }
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard onPress={() => handleOpenGroup(item)} title={item} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
        // type="SECONDARY"
      />
    </Container>
  );
}
