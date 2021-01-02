import { Meta, Story } from "@storybook/react";
import ThumbnailCardContent, {
  ThumbnailCardContentProps,
} from "./ThumbanilCardContent";

import { ImageWrapper, Image } from "../../Image";
import { LazyLoad } from "../../../lib/LazyLoad";

export default {
  title: "layout/ThumbnailCardContent",
  component: ThumbnailCardContent,
} as Meta;

const Template: Story<ThumbnailCardContentProps> = (args) => (
  <ThumbnailCardContent {...args} />
);

export const WireFrame = Template.bind({});
WireFrame.args = {
  decorationColor: "#34D399",
  image: <div className="bg-red-400 w-40 h-32"></div>,
};

export const Normal = Template.bind({});
const vars = {
  width: 200,
  height: 120,
  src: "https://cdn.starlist.pro/map/Triple-Dribble.png",
  alt: "Triple Dribble",
};
Normal.args = {
  ...WireFrame.args,
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
