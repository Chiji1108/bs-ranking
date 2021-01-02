//TODO
import data from "../mock/statistic.json";
import Battlelogs from "./Battlelogs";
import LatestBattlelog from "./LatestBattlelog";
import Records from "./Records";

export interface StatisticContainerProps {
  playerTag: string;
  outputType: "DESCRIPTION" | "THUMBNAIL";
}

export default function StatisticContainer({
  playerTag,
  outputType,
}: StatisticContainerProps) {
  const statistic = { ...data.data.statistic };
  // const latestBattlelog = statistic.battlelogs[0];
  const battlelogs = statistic.battlelogs;

  switch (outputType) {
    case "DESCRIPTION":
      if (statistic.records) {
        return <Records records={{ ...statistic.records }} />;
      } else {
        return null;
      }
    case "THUMBNAIL":
      // return <LatestBattlelog battlelog={latestBattlelog} />;
      return <Battlelogs battlelogs={battlelogs} />;
  }
}
