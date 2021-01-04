import { Meta, Story } from "@storybook/react";
import Select, { SelectProps } from "./Select";

export default {
  title: "ui/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Normal = Template.bind({});

//TODO
