import { ReactElement, memo } from "react";
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
    // TODO: inline-blockを外してflex-colがかかるようにする
    <div className={classNames("relative inline-block", className)}>
      {content}
      <div className="absolute -bottom-1 right-1">{caption}</div>
      <div className="absolute top-1 right-1">{badge}</div>
    </div>
  );
});
