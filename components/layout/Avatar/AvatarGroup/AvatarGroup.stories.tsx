import { Meta, Story } from "@storybook/react";
import AvatarGroup, { AvatarGroupProps } from "./AvatarGroup";
import Avatar from "../Avatar";

export default {
  title: "layout/AvatarGroup",
  component: AvatarGroup,
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;
export const Normal = Template.bind({});
const avatarProps = {
  src: "https://cdn.starlist.pro/brawler-bs/El-Primo.png",
  alt: "El-Primo",
  size: 24,
};
Normal.args = {
  children: (
    <>
      <Avatar {...avatarProps} />
      <Avatar {...avatarProps} />
      <Avatar {...avatarProps} />
    </>
  ),
  gap: -6,
};
