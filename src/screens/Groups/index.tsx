import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // a type possible navigation
import { useNavigation } from "@react-navigation/native"

/* type RootParamList = {
  groups: undefined; // defining what routes exist in application and what parameter his routes have
  new: undefined;
  players: {
    group: string;
  };
};

type navigationProps = {
  navigation: NativeStackNavigationProp<RootParamList, "groups">;
}; */

export function Groups(/*{ navigation }: navigationProps*/) {
  // props have mothod navigation
  const [groups, setGroups] = useState<string[]>(["Maria Clara", "Mateus"]);
  const navigation = useNavigation() // instancing this hook in memory

  function handleNewGroup() {
    navigation.navigate('new') // in object navigation have method navigate - create navigation in pages
    // navigation.navigate("new");
  }

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
