import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group); // find players by group

    const players = storage.filter((player) => player.team === team); // filter players by team

    return players;
  } catch (error) {
    throw error;
  }
}
