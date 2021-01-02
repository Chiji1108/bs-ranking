import { ReactNode, memo } from "react";
import classNames from "classnames";
import styled from "styled-components";

export type AvatarGroupProps = {
  children: ReactNode;
  gap: number;
  className?: string;
};

export default memo(function AvatarGroup({
  children,
  gap,
  className,
}: AvatarGroupProps) {
  return (
    <Container className={classNames("flex flex-nowrap", className)} gap={gap}>
      {children}
    </Container>
  );
});

const Container = styled.div<{ gap: number }>`
  & > *:not(:first-child) {
    margin-left: ${({ gap }) => gap && gap}px;
  }
`;
