import { Grade, Record } from "../../../graphql";
import { DisplayBox, DisplayBoxCaption, DisplayBoxContent } from "../../layout";
import { memo } from "react";

export interface RecordsProps {
  records: Record;
}

export default memo(function Records({ records }: RecordsProps) {
  const items = Object.entries(records).map(([key, value]) => (
    <DisplayBox
      key={key}
      content={
        <DisplayBoxContent grade={value.grade as Grade} className="text-sm">
          {value.content}
        </DisplayBoxContent>
      }
      caption={
        <DisplayBoxCaption className="text-xs">
          {value.caption}
        </DisplayBoxCaption>
      }
    />
  ));
  return <div className="flex space-x-2">{items}</div>;
});
