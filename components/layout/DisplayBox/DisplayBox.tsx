import { ReactElement, ReactNode, memo } from "react";

export type DisplayBoxProps = {
  content: ReactElement;
  caption?: ReactElement;
  className?: string;
  children?: never;
};

export type DisplayBoxItemProps = {
  children: ReactNode;
  className?: string;
};

export default memo(function DisplayBox({
  content,
  caption,
  className,
  ...props
}: DisplayBoxProps) {
  return (
    <div {...props} className={className}>
      {content}
      {caption && caption}
    </div>
  );
});
