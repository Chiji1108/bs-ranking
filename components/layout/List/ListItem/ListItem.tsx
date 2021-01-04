import { ReactElement, Key, memo } from "react";
import classNames from "classnames";

export type ListItemProps = {
  avatar: ReactElement;
  title: ReactElement;
  description: ReactElement;
  thumbnail: ReactElement;
  width: number;
  titleHeight: number;
  children?: never;
  className?: string;
};

export default memo(function ListItem({
  avatar,
  title,
  description,
  thumbnail,
  width,
  titleHeight,
  className,
}: ListItemProps) {
  return (
    // <li key={key} className={classNames(styles.container, className)}>
    //   <div className={styles.avatar}>{avatar}</div>
    //   <div className={styles.title}>{title}</div>
    //   <div className={styles.description}>{description}</div>
    //   <div className={styles.thumbnail}>{thumbnail}</div>
    // </li>
    // <li key={key} className={classNames(styles.container, className)}>
    //   <div className={styles.innerContainer}>
    //     <div className={styles.avatar}>{avatar}</div>
    //     <div className={styles.description}>
    //       {description}
    //       <div className={styles.title}>{title}</div>
    //     </div>
    //   </div>
    //   <div className={styles.thumbnail}>{thumbnail}</div>
    // </li>
    <li className={classNames("flex flex-nowrap space-x-3", className)}>
      <div className="w-10">{avatar}</div>
      <div style={{ width: width }}>
        <div
          style={{ width: width, height: titleHeight }}
          className="overflow-x-auto"
        >
          {title}
        </div>
        <div className="mt-1.5">{description}</div>
      </div>
      <div className="flex-1">{thumbnail}</div>
    </li>
  );
});
