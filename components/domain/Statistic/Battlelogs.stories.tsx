import { Meta, Story } from "@storybook/react";
import Battlelogs, { BattlelogsProps } from "./Battlelogs";

import data from "../../mock/statistic.json";

export default {
  title: "domain/Battlelogs",
  component: Battlelogs,
} as Meta;

const Template: Story<BattlelogsProps> = (args) => <Battlelogs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  battlelogs: [...data.data.statistic.battlelogs],
};
