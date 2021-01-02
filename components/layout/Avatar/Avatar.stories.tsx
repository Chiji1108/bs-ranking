import { Story, Meta } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";

export default {
  title: "layout/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: "https://cdn.starlist.pro/brawler-bs/El-Primo.png",
  alt: "El-Primo",
  size: 24,
};

export const NotFound = Template.bind({});
NotFound.args = {
  ...Normal.args,
  src: "hoge",
};
