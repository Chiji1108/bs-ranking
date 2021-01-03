import { Grade, Record } from "../../../graphql";
import { DisplayBox, DisplayBoxCaption, DisplayBoxContent } from "../../layout";
import { memo } from "react";

export interface RecordsProps {
  records: Record;
}

export default memo(function Records({ records }: RecordsProps) {
  const items = Object.values(records).map((record) => (
    <DisplayBox
      content={
        <DisplayBoxContent grade={record.grade as Grade} className="text-sm">
          {record.content}
        </DisplayBoxContent>
      }
      caption={
        <DisplayBoxCaption className="text-xs">
          {record.caption}
        </DisplayBoxCaption>
      }
    />
  ));
  return <div className="flex space-x-2">{items}</div>;
});
