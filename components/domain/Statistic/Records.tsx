import { Grade, Record } from "../../../graphql";
import { DisplayBox, DisplayBoxCaption, DisplayBoxContent } from "../../layout";
import { memo } from "react";
import cn from "classnames";

export interface RecordsProps {
  records: Record;
}

export default memo(function Records({ records }: RecordsProps) {
  const items = Object.entries(records).map(([key, value]) => {
    if (key == "__typename") return;
    return (
      <DisplayBox
        key={key}
        content={
          <DisplayBoxContent
            className={cn("text-sm", {
              "text-grade-god": value.grade == "GOD",
              "text-grade-great": value.grade == "GREAT",
              "text-grade-good": value.grade == "GOOD",
              "text-grade-soso": value.grade == "SOSO",
              "text-grade-bad": value.grade == "BAD",
            })}
          >
            {value.content}
          </DisplayBoxContent>
        }
        caption={
          <DisplayBoxCaption className="text-xs">
            {value.caption}
          </DisplayBoxCaption>
        }
      />
    );
  });
  return <div className="flex space-x-2 mb-1">{items}</div>;
});
