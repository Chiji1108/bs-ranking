import { DisplayBoxItemProps } from "../DisplayBox";
import classNames from "classnames";
import { memo } from "react";

export default memo(function DisplayBoxCaption({
  children,
  className,
  ...props
}: DisplayBoxItemProps) {
  return (
    <p
      {...props}
      className={classNames(
        "text-body-muted",
        "text-2xs",
        "leading-none",
        "font-light",
        "whitespace-nowrap",
        className
      )}
    >
      {children}
    </p>
  );
});
