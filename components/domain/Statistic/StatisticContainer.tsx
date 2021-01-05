//TODO
import { gql, useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import { Battlelog, Record } from "../../../graphql";
import dataJson from "../../mock/statistic.json";
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

  if (loading && outputType == "DESCRIPTION")
    return <Skeleton width={142} height={32} />;
  if (loading && outputType == "THUMBNAIL") return <Skeleton height={72} />;
  if (error) {
    return <p className="text-body">{error.message}</p>;
  }
  if (!data && outputType == "DESCRIPTION")
    return (
      <p className="text-body-muted text-xs">
        直近25戦にランクマッチはありませんでした
      </p>
    );
  if (!data) return <div></div>;

  // const data = dataJson.data;

  switch (outputType) {
    case "DESCRIPTION":
      if (data.statistic.records) {
        return <Records records={{ ...data.statistic.records }} />;
      } else {
        return null;
      }
    case "THUMBNAIL":
      // return <LatestBattlelog battlelog={latestBattlelog} />;
      return (
        <Battlelogs
          battlelogs={[...data.statistic.battlelogs]}
          playerTag={playerTag}
        />
      );
  }
}
