import { Meta, Story } from "@storybook/react";
import { DisplayBox, DisplayBoxContent, DisplayBoxCaption } from ".";
import { DisplayBoxProps } from "./DisplayBox";

export default {
  title: "layout/DisplayBox",
  component: DisplayBox,
} as Meta;

const Template: Story<DisplayBoxProps> = (args) => <DisplayBox {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  content: <DisplayBoxContent>Content</DisplayBoxContent>,
  caption: <DisplayBoxCaption>Caption</DisplayBoxCaption>,
};
