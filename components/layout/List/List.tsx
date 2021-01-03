import { ReactNode, memo } from "react";
import styles from "./List.module.css";
import classNames from "classnames";

export type ListProps = {
  children: ReactNode;
  className?: string;
};

export default memo(function List({ children, className }: ListProps) {
  return (
    <ul
      className={classNames(
        styles.container,
        // "space-y-2",
        // "divide-y",
        // "divide-primary-light",
        className
      )}
    >
      {children}
    </ul>
  );
});
