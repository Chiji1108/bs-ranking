import { LazyLoad } from "../../lib/LazyLoad";
import { Image } from "../Image";
import classNames from "classnames";
import { memo } from "react";

export type AvatarProps = {
  src: string;
  alt: string;
  size: number;
  children?: never;
  className?: string;
};

export default memo(function Avatar({
  src,
  alt,
  size,
  className,
}: AvatarProps) {
  const avatarClass = "rounded-full";
  return (
    <LazyLoad width={size} height={size} circle>
      <Image
        width={size}
        height={size}
        src={src}
        alt={alt}
        fallback={
          <div
            style={{ width: size, height: size }}
            className={classNames(
              avatarClass,
              "bg-gray-400",
              "flex",
              "items-center",
              "justify-start",
              "text-xs",
              "whitespace-nowrap",
              "overflow-x-auto",
              "ring-2",
              "ring-primary-dark"
            )}
          >
            {alt}
          </div>
        }
        className={classNames(avatarClass, className)}
      />
    </LazyLoad>
  );
});
