import { ReactNode, memo } from "react";
import classNames from "classnames";

export type ThumbnailCardGroupProps = {
  minWidth?: number;
  children: ReactNode;
  className?: string;
};

export default memo(function ThumbnailCardGroup({
  children,
  minWidth,
  className,
}: ThumbnailCardGroupProps) {
  return (
    <div
      className={classNames(
        "flex",
        "space-x-3",
        "flex-nowrap",
        "overflow-x-auto",
        className
      )}
      style={{ minWidth: minWidth ? minWidth : "" }}
    >
      {children}
    </div>
  );
});
