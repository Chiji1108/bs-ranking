import { Meta, Story } from "@storybook/react";
import ThumbnailCardGroup, {
  ThumbnailCardGroupProps,
} from "./ThumbnailCardGroup";

export default {
  title: "layout/ThumbnailCardGroup",
  component: ThumbnailCardGroup,
} as Meta;

const Template: Story<ThumbnailCardGroupProps> = (args) => (
  <ThumbnailCardGroup {...args} />
);

export const WireFrame = Template.bind({});
WireFrame.args = {
  children: (
    <>
      <div className="w-80 h-36 bg-blue-400">children</div>
      <div className="w-80 h-36 bg-red-400">children</div>
      <div className="w-80 h-36 bg-blue-400">children</div>
      <div className="w-80 h-36 bg-red-400">children</div>
      <div className="w-80 h-36 bg-blue-400">children</div>
      <div className="w-80 h-36 bg-red-400">children</div>
    </>
  ),
};
