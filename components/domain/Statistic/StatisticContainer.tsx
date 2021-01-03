//TODO
import { gql, useQuery } from "@apollo/client";
import { Battlelog, Record } from "../../../graphql";
import data from "../../mock/statistic.json";
import Battlelogs from "./Battlelogs";
import LatestBattlelog from "./LatestBattlelog";
import Records from "./Records";

const GET_STATISTIC = gql`
  query getStatistic($playerTag: ID!) {
    statistic(playerTag: $playerTag) {
      records {
        sumOfWinLoss {
          content
          caption
          grade
          staged
        }
        winningPercentage {
          content
          caption
          grade
          staged
        }
        winningStreak {
          content
          caption
          grade
          staged
        }
      }
      battlelogs {
        battleTime
        event {
          map {
            name
            imageUrl
          }
          mode {
            name
            imageUrl
          }
        }
        result
        picks {
          tag
          brawler {
            name
            imageUrl
          }
        }
      }
    }
  }
`;

interface StatisticData {
  statistic: {
    records: Record;
    battlelogs: Array<Battlelog>;
  };
}

interface StatisticVars {
  playerTag: string;
}

export interface StatisticContainerProps {
  playerTag: string;
  outputType: "DESCRIPTION" | "THUMBNAIL";
}

export default function StatisticContainer({
  playerTag,
  outputType,
}: StatisticContainerProps) {
  const { loading, error, data } = useQuery<StatisticData, StatisticVars>(
    GET_STATISTIC,
    { variables: { playerTag: playerTag } }
  );

  if (loading) return <p>ローディング中</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>データ無し</p>;

  switch (outputType) {
    case "DESCRIPTION":
      if (data.statistic.records) {
        return <Records records={{ ...data.statistic.records }} />;
      } else {
        return null;
      }
    case "THUMBNAIL":
      // return <LatestBattlelog battlelog={latestBattlelog} />;
      return <Battlelogs battlelogs={{ ...data.statistic.battlelogs }} />;
  }
}
