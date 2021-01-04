import classNames from "classnames";
import { ReactNode, memo } from "react";
import { Grade } from "../../../../graphql";

export interface DisplayBoxContentProps {
  children: ReactNode;
  className?: string;
}

export default memo(function DisplayBoxContent({
  children,
  className,
  ...props
}: DisplayBoxContentProps) {
  return (
    <h3
      {...props}
      className={classNames("font-bold whitespace-nowrap", className)}
    >
      {children}
    </h3>
  );
});
