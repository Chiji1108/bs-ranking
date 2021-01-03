import { Meta, Story } from "@storybook/react";

import data from "../../mock/statistic.json";
import Records, { RecordsProps } from "./Records";

export default {
  title: "domain/Records",
  component: Records,
} as Meta;

const Template: Story<RecordsProps> = (args) => <Records {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  records: { ...data.data.statistic.records },
};
