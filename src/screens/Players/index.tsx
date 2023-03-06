import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Filter } from "../../components/Filter";
import { FlatList, Alert, TextInput } from "react-native";
import { useEffect, useState, useRef } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorareDTO } from "@storage/player/PlayerStorageDTO";
import { PlayerRemoveByGroup } from "@storage/player/playerRemoveByGroup";

type routeParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorareDTO[]>([]); // 'players' is a object of arrays, so is used '[]' in typing
  const route = useRoute(); // is possible acess parameters through the hook 'useRoute'
  const { group } = route.params as routeParams; // 'as' is used to indicate the type of object definition

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      // using 'trim' for delete spaces voids
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar!"
      );
    }

    const newPlayer = {
      // adding player with your name and team in a specific group
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group); // function with logic the includes data the player in storage by group
      newPlayerNameInputRef.current?.blur(); // 'blur' delete focus in input
      setNewPlayerName("");
      fetchPlayersByTeam(); // loading listing again for show in screen
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar!");
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await PlayerRemoveByGroup(playerName, group); // delete player especificed in parameter
      fetchPlayersByTeam(); // loading listing again for show in screen
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa!");
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado!"
      );
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false} // for the corrector not correct the content in input
          onChangeText={(text) => setNewPlayerName(text)}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} name="add" type="SECONDARY" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]} // for stylizing the container content
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time!" />
        )}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
