import { Grade, Record } from "../../graphql";
import { DisplayBox, DisplayBoxCaption, DisplayBoxContent } from "../layout";
import { memo } from "react";

export interface RecordsProps {
  records: Record;
}

export default memo(function Records({ records }: RecordsProps) {
  return (
    <div className="flex space-x-2">
      <DisplayBox
        content={
          <DisplayBoxContent grade={records.sumOfWinLoss.grade as Grade}>
            {records.sumOfWinLoss.content}
          </DisplayBoxContent>
        }
        caption={
          <DisplayBoxCaption>{records.sumOfWinLoss.caption}</DisplayBoxCaption>
        }
      />
      <DisplayBox
        content={
          <DisplayBoxContent grade={records.winningPercentage.grade as Grade}>
            {records.winningPercentage.content}
          </DisplayBoxContent>
        }
        caption={
          <DisplayBoxCaption>
            {records.winningPercentage.caption}
          </DisplayBoxCaption>
        }
      />
      <DisplayBox
        content={
          <DisplayBoxContent grade={records.winningStreak.grade as Grade}>
            {records.winningStreak.content}
          </DisplayBoxContent>
        }
        caption={
          <DisplayBoxCaption>{records.winningStreak.caption}</DisplayBoxCaption>
        }
      />
    </div>
  );
});
