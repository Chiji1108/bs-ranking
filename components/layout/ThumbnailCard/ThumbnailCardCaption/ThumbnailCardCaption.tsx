import { ReactElement, memo } from "react";
import classNames from "classnames";

export interface ThumbnailCardCaptionProps {
  badge: ReactElement;
  content: ReactElement;
  children?: never;
  className?: string;
}

export default memo(function ThumbnailCardCaption({
  content,
  badge,
  className,
  ...props
}: ThumbnailCardCaptionProps) {
  return (
    <div
      className={classNames(
        "relative",
        "inline-block",
        "leading-none",
        className
      )}
      {...props}
    >
      {content}
      <div className="absolute -top-4 right-1">{badge}</div>
    </div>
  );
});
