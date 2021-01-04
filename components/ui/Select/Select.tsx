import { ReactNode, memo, SelectHTMLAttributes } from "react";
import styled from "styled-components";
import config from "../../../tailwind.config";
import cn from "classnames";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
  className?: string;
};

export default memo(function Select({
  children,
  className,
  ...props
}: SelectProps) {
  return (
    <Container className={cn("inline-block", className)}>
      <StyledSelect {...props}>{children}</StyledSelect>
    </Container>
  );
});

const Container = styled.div`
  position: relative;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border: 0px;
    border-bottom: solid 2px ${config.theme.extend.colors.body.DEFAULT};
    border-right: solid 2px ${config.theme.extend.colors.body.DEFAULT};
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -4px;
  }
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 40px;
  background: transparent;
  position: relative;
  z-index: 1;
  padding: 0 40px 0 10px;
  border: 2px solid ${config.theme.extend.colors.body.DEFAULT};
  border-radius: 9999px;

  &:-moz-focusring {
    outline: none;
  }
  &::-ms-expand {
    display: none;
  }
`;
