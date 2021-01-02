import { Story, Meta } from "@storybook/react";

import ListItem, { ListItemProps } from "./ListItem";

export default {
  title: "layout/ListItem",
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  avatar: <div className="bg-red-400 p-10">avatar</div>,
  title: <div className="bg-yellow-400 p-10">title</div>,
  description: <div className="bg-green-400 p-10">description</div>,
  thumbnail: <div className="bg-blue-400 p-10">thumbnail</div>,
};
