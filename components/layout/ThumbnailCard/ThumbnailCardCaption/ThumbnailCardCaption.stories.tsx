import { Meta, Story } from "@storybook/react";
import ThumbnailCardCaption, {
  ThumbnailCardCaptionProps,
} from "./ThumbnailCardCaption";

export default {
  title: "layout/ThumbnailCardCaption",
  component: ThumbnailCardCaption,
} as Meta;

const Template: Story<ThumbnailCardCaptionProps> = (args) => (
  <ThumbnailCardCaption {...args} />
);

export const WireFrame = Template.bind({});
WireFrame.args = {
  content: <div className="p-4 bg-blue-400 inline-block">content</div>,
  badge: <div className="p-4 bg-red-400 inline-block">badge</div>,
};
