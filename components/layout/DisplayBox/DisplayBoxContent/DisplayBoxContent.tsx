import classNames from "classnames";
import { ReactNode, memo } from "react";
import { Color } from "../../../../styles";
import { Grade } from "../../../../graphql";

export interface DisplayBoxContentProps {
  children: ReactNode;
  className?: string;
  grade?: Grade;
}

export default memo(function DisplayBoxContent({
  children,
  grade,
  className,
  ...props
}: DisplayBoxContentProps) {
  return (
    <h3
      {...props}
      className={classNames(
        "text-xs",
        "text-body",
        "font-bold",
        "whitespace-nowrap",
        className
      )}
      style={{ color: grade ? gradeReducer(grade) : "" }}
    >
      {children}
    </h3>
  );
});

const gradeReducer = (grade: Grade) => {
  if (grade) {
    switch (grade) {
      case "GREAT":
        return Color.Grade.GREAT;
      case "GOOD":
        return Color.Grade.GOOD;
      case "SOSO":
        return Color.Grade.SOSO;
      case "BAD":
        return Color.Grade.BAD;
    }
  }
};
