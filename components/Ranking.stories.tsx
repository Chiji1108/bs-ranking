import { Meta, Story } from "@storybook/react";
import Ranking, { RankingProps } from "./Ranking";

import data from "./mock/players.json";

export default {
  title: "Ranking",
  component: Ranking,
} as Meta;

const Template: Story<RankingProps> = (args) => <Ranking {...args} />;

export const Mock = Template.bind({});
Mock.args = {
  // players: [data.data.players[0], data.data.players[1], data.data.players[2]],
  players: [...data.data.players],
};
