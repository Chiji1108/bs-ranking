//TODO
// import Image from "next/image";
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
  const avatarClass = "rounded-full ring-primary-dark ring-2";
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
              "overflow-x-auto"
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
