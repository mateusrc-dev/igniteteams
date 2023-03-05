import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroupName: string) {
  try { // to catch errors in the application so it doesn't stop
    const storageGroups = await groupsGetAll()

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storageGroups, newGroupName])) // for save object in storage is needed transform object in string
  } catch (error) {
    throw error; // send an error to be displayed on the screen
  }
}