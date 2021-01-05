import { ReactElement, ReactNode, memo } from "react";
import classNames from "classnames";

export interface BadgeProps {
  children: ReactNode;
  icon?: ReactElement;
  className?: string;
}

export default memo(function Badge({ children, icon, className }: BadgeProps) {
  return (
    <div
      className={classNames(
        "bg-primary-dark rounded-full px-2 py-1 flex flex-nowrap items-center text-2xs font-light leading-none",
        className
      )}
    >
      <div className="flex items-center mr-1">{icon}</div>
      <div
        style={{ maxWidth: 72, height: 12 }}
        className="flex items-center whitespace-nowrap overflow-x-auto"
      >
        {children}
      </div>
    </div>
  );
});
