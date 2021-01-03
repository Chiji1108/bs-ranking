import { ReactNode, useEffect, useRef, memo } from "react";
import classNames from "classnames";
import styles from "./ImageWrapper.module.css";

type ImageWrapperProps = {
  width: number;
  height: number;
  // scrollable?: boolean;
  children: ReactNode;
  className?: string;
};

export default memo(function ImageWrapper({
  width,
  height,
  // scrollable = false,
  children,
  className,
}: ImageWrapperProps) {
  // const wrapperDiv = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (scrollable) {
  //     wrapperDiv.current?.scroll({
  //       top:
  //         (wrapperDiv.current?.scrollHeight -
  //           wrapperDiv.current?.clientHeight) /
  //         2,
  //       left:
  //         (wrapperDiv.current?.scrollWidth - wrapperDiv.current?.clientWidth) /
  //         2,
  //     });
  //   }
  // }, [wrapperDiv]);
  return (
    <div
      // className={classNames({ "overflow-auto": scrollable }, className)}
      className={className}
      style={{ width: width, height: height }}
      // ref={wrapperDiv}
    >
      {children}
    </div>
  );
});
