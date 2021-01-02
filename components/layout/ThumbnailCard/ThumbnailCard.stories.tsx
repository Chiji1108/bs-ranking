import { Meta, Story } from "@storybook/react";
import ThumbnailCard, { ThumbnailCardProps } from "./ThumbnailCard";
import { Normal as Content } from "./ThumbnailCardContent/ThumbnailCardContent.stories";

import { ImageWrapper, Image } from "../Image";
import { LazyLoad } from "../../lib/LazyLoad";
const vars = {
  width: 200,
  height: 120,
  src: "https://cdn.starlist.pro/map/Triple-Dribble.png",
  alt: "Triple Dribble",
};
const contentProps = {
  decorationColor: "#34D399",
  image: (
    <LazyLoad width={vars.width} height={vars.height}>
      <ImageWrapper width={vars.width} height={vars.height}>
        <Image
          fallback={
            <div style={{ width: vars.width, height: vars.height }}>
              {vars.alt}
            </div>
          }
          src={vars.src}
          alt={vars.alt}
          zoomed
          grayBg
        />
      </ImageWrapper>
    </LazyLoad>
  ),
};

export default {
  title: "layout/ThumbnailCard",
  component: ThumbnailCard,
} as Meta;

const Template: Story<ThumbnailCardProps> = (args) => (
  <ThumbnailCard {...args} />
);

export const WireFrame = Template.bind({});
WireFrame.args = {
  content: <Content {...contentProps} />,
  caption: <div className="bg-blue-400 p-4">caption</div>,
  badge: <div className="bg-red-400 p-4">badge</div>,
};
