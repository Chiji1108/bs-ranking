import { Meta, Story } from "@storybook/react";
import { CSSProperties, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

interface SkeletonProps {
  count?: number;
  duration?: number;
  width?: string | number;
  wrapper?: ReactNode;
  height?: string | number;
  circle?: boolean;
  style?: CSSProperties;
  className?: string;
}

export default {
  title: "lib/Skeleton",
  component: Skeleton,
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  width: 50,
  height: 50,
  circle: true,
};

export const Rect = Template.bind({});
Rect.args = {
  width: 100,
  height: 20,
};
