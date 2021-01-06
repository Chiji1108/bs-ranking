import Ranking from "./Ranking";

import dataJson from "../../mock/players.json";
import { gql, useQuery } from "@apollo/client";
import { Player } from "../../../graphql";
import Skeleton from "react-loading-skeleton";

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
  // console.log("RankingContainer rendering");
  const { loading, error, data } = useQuery<PlayersData, PlayersVars>(
    GET_PLAYERS,
    { variables: { countryCode, brawlerId } }
  );

  if (loading) return <Skeleton height={92} count={10} duration={0.6} />;
  if (error) {
    return <p className="text-body">{error.message}</p>;
  }
  if (!data) return <p>データ無し</p>;

  // const data = dataJson.data;

  return <Ranking players={[...data.players]} />;
}
