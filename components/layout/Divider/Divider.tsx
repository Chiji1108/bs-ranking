import classNames from "classnames";
import { memo } from "react";

export interface DividerProps {
  children?: never;
  className?: string;
}

export default memo(function Divider({ className }: DividerProps) {
  return (
    <div className={classNames("w-4/5", "h-px", "bg-gray-400", className)} />
  );
});
