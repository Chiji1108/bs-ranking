import { ReactNode, memo } from "react";
import { default as Lazy } from "react-lazyload";
import Skeleton from "react-loading-skeleton";

type LazyLoadProps = {
  width: number;
  height: number;
  circle?: boolean;
  children: ReactNode;
};

export default memo(function LazyLoad({
  width,
  height,
  circle = false,
  children,
}: LazyLoadProps) {
  return (
    <Lazy
      height={height}
      placeholder={<Skeleton width={width} height={height} circle={circle} />}
    >
      {children}
    </Lazy>
  );
});
