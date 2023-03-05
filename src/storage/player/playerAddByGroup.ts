import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorareDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPlayer: PlayerStorareDTO,
  group: string
) {
  try {
    const players = await playersGetByGroup(group); // getting players the group

    const playerAlreadyExists = players.filter( // verifying if player included in teams
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length !== 0) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui!")
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...players, newPlayer]) // adding players by group
    );
  } catch (error) {
    throw error;
  }
}
