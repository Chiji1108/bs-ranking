import Ranking from "./Ranking";

import data from "./mock/players.json";

const players = [...data.data.players];

export default function RankingContainer() {
  return <Ranking players={players} />;
}
