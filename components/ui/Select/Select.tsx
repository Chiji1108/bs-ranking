import { ReactNode, memo } from "react";
import classNames from "classnames";

interface SelectProps {
  children: ReactNode;
  className: string;
}

export default memo(function Select({ children, className }: SelectProps) {
  return <select className={classNames("", className)}>{children}</select>;
});
