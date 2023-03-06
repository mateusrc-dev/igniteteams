import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storageGroups = await groupsGetAll();
    const filteredGroups = storageGroups.filter((group) => group !== groupDeleted); // using filter for delete group of parameter

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups)) // inserting in storage the groups with group of parameter deleted
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`) // deleting complete players key

  } catch (error) {
    throw error;
  }
}
