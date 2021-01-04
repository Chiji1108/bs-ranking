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
        "bg-primary-dark rounded-full pl-2 pr-2 pt-1 pb-1 flex flex-nowrap items-center text-2xs font-light leading-none",
        className
      )}
    >
      {icon && <div className="mr-1">{icon}</div>}
      <div
        style={{ maxWidth: 72 }}
        className="whitespace-nowrap overflow-x-auto"
      >
        {children}
      </div>
    </div>
  );
});
