import { ReactElement, memo } from "react";
import classNames from "classnames";

export type ThumbnailCardContentProps = {
  decorationColor: string;
  image: ReactElement;
  children?: never;
  className?: string;
};

export default memo(function ThumbnailCardContent({
  decorationColor,
  image,
  className,
}: ThumbnailCardContentProps) {
  return (
    <div
      className={classNames(
        "relative",
        "overflow-hidden",
        "rounded",
        "inline-block",
        "leading-none",
        className
      )}
    >
      <div className="absolute inset-y-0 left-0 z-10">
        <div
          className="w-1 h-full inline-block"
          style={{ backgroundColor: decorationColor }}
        />
        <div className="bg-primary w-1 h-full inline-block" />
      </div>
      {image}
    </div>
  );
});
