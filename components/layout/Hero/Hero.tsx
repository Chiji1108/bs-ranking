import { memo, ReactElement, ReactNode } from "react";
import cn from "classnames";

export interface HeroProps {
  children?: never;
  className?: string;
  title: ReactNode;
  description: ReactNode;
  thumbnail: ReactElement;
}

export default memo(function Hero({
  className,
  title,
  description,
  thumbnail,
}: HeroProps) {
  return (
    <div className={className}>
      <h1 className="text-body font-bold text-5xl mb-2">{title}</h1>
      <p className="text-body-muted font-light text-base">{description}</p>
    </div>
  );
});