import { ReactElement, useState, memo } from "react";
import classNames from "classnames";
import styles from "./Image.module.css";

type ImageProps = JSX.IntrinsicElements["img"] & {
  fallback: ReactElement;
  zoomed?: boolean;
  grayBg?: boolean;
  children?: never;
  className?: string;
};
// TODO: use next/image
export default memo(function Image({
  fallback,
  zoomed = false,
  grayBg = false,
  className,
  ...props
}: ImageProps) {
  const [hasError, setError] = useState(false);

  return hasError ? (
    fallback
  ) : (
    <img
      className={classNames(
        {
          [styles.zoomed]: zoomed,
          [styles.grayBg]: grayBg,
        },
        className
      )}
      {...props}
      onError={() => setError(true)}
    />
  );
});
