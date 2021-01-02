import { Key, ReactElement, memo } from "react";
import classNames from "classnames";

export type ThumbnailCardProps = {
  content: ReactElement;
  caption: ReactElement;
  badge: ReactElement;
  children?: never;
  className?: string;
};

export default memo(function ThumbnailCard({
  content,
  caption,
  badge,
  className,
}: ThumbnailCardProps) {
  return (
    <div className={classNames("relative inline-block mb-1", className)}>
      {content}
      <div className="absolute -bottom-1 right-1">{caption}</div>
      <div className="absolute top-1 right-1">{badge}</div>
    </div>
  );
});
