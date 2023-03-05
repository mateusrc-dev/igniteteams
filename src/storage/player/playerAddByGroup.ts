import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorareDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorareDTO, group: string) {
  try {
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify([newPlayer]))
  } catch (error) {
    throw new AppError("Não foi possível inserir novo jogador");
  }
}
