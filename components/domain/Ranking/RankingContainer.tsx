import Ranking from "./Ranking";

import data from "../../mock/players.json";
import { gql, useQuery } from "@apollo/client";
import { Player } from "../../../graphql";

const players = [...data.data.players];

const GET_PLAYERS = gql`
  query getPlayers($countryCode: String, $brawlerId: ID) {
    players(countryCode: $countryCode, brawlerId: $brawlerId) {
      tag
      rank
      trophies
      name
      club {
        name
      }
    }
  }
`;

interface PlayersData {
  players: Array<Player>;
}

interface PlayersVars {
  countryCode: string;
  brawlerId: number | "";
}

interface RankingContainerProps {
  countryCode: string;
  brawlerId: number | "";
}

export default function RankingContainer({
  countryCode = "global",
  brawlerId = "",
}: RankingContainerProps) {
  const { loading, error, data } = useQuery<PlayersData, PlayersVars>(
    GET_PLAYERS,
    { variables: { countryCode: countryCode, brawlerId: brawlerId } }
  );

  if (loading) return <p>ローディング中</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>データ無し</p>;

  return <Ranking players={players} />;
}
