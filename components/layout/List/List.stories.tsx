import { Meta, Story } from "@storybook/react";
import List, { ListProps } from "./List";

export default {
  title: "layout/List",
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const WireFrame = Template.bind({});
WireFrame.args = {
  children: (
    <>
      <div className="w-64 h-32 bg-blue-400">ListItem</div>
      <div className="w-64 h-32 bg-red-400">ListItem</div>
      <div className="w-64 h-32 bg-blue-400">ListItem</div>
    </>
  ),
};
