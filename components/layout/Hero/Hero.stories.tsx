import { Story, Meta } from "@storybook/react";
import Hero, { HeroProps } from "./Hero";

export default {
  title: "layout/Hero",
  component: Hero,
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: (
    <>
      ブロスタ
      <br />
      ランキング
    </>
  ),
  description: "ランカー最新編成も見れます",
  thumbnail: <div className="bg-red-400 rounded w-40 h-24"></div>,
  className: "bg-green-400 p-6",
};
