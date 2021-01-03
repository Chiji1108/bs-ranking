import { Battlelog } from "../../../graphql";
import {
  ThumbnailCard,
  ThumbnailCardContent,
  ThumbnailCardCaption,
  ImageWrapper,
  Image,
  Badge,
  Avatar,
} from "../../layout";
import { LazyLoad } from "../../lib";
import { decorationColorReducer, battleTimeReducer } from "../../util";
import { memo } from "react";

const mapImage = {
  width: 120,
  height: 66,
};

const modeIcon = {
  width: 12,
  height: 12,
};

export interface LatestBattlelogProps {
  battlelog: Battlelog;
}

export default memo(function LatestBattlelog({
  battlelog,
}: LatestBattlelogProps) {
  if (!battlelog)
    return <div>直近25戦にランクマッチの戦闘データがありませんでした...</div>;
  return (
    <ThumbnailCard
      content={
        <ThumbnailCardContent
          decorationColor={decorationColorReducer(battlelog.result)}
          image={
            battlelog.event ? (
              <LazyLoad width={mapImage.width} height={mapImage.height}>
                <ImageWrapper
                  width={mapImage.width}
                  height={mapImage.height}
                  // scrollable
                >
                  <Image
                    fallback={
                      <div
                        style={{
                          width: mapImage.width,
                          height: mapImage.height,
                        }}
                      >
                        {battlelog.event.map.name}
                      </div>
                    }
                    src={battlelog.event.map.imageUrl}
                    alt={battlelog.event.map.name}
                    grayBg
                    width={mapImage.width}
                    height={mapImage.height}
                    style={{
                      width: mapImage.width,
                      height: mapImage.height,
                    }}
                    className="object-cover object-center transform scale-110"
                  />
                </ImageWrapper>
              </LazyLoad>
            ) : (
              <div>イベントデータ無し</div> //TODO
            )
          }
        />
      }
      caption={
        <ThumbnailCardCaption
          content={
            battlelog.event ? (
              <Badge
                className="text-body"
                icon={
                  <LazyLoad width={modeIcon.width} height={modeIcon.height}>
                    <Image
                      width={modeIcon.width}
                      height={modeIcon.height}
                      src={battlelog.event.mode.imageUrl}
                      alt={battlelog.event.mode.name}
                      fallback={
                        <div
                          style={{
                            width: modeIcon.width,
                            height: modeIcon.height,
                          }}
                          className="bg-gray-400 flex items-center justify-start text-xs whitespace-nowrap overflow-x-auto"
                        >
                          {battlelog.event.mode.name}
                        </div>
                      }
                    />
                  </LazyLoad>
                }
              >
                {battlelog.event.map.name}
              </Badge> //TODO icon
            ) : (
              <div>イベントデータ無し</div>
            )
          }
          badge={
            <div className="flex flex-row-reverse flex-nowrap space-x-reverse -space-x-0.5">
              {battlelog.picks.map((pick) => (
                <Avatar
                  key={pick.tag}
                  src={pick.brawler.imageUrl}
                  alt={pick.brawler.name}
                  size={16}
                />
              ))}
            </div>
          }
        />
      }
      badge={
        <Badge className="text-body-muted">
          {battleTimeReducer(battlelog.battleTime)}
        </Badge>
      }
    />
  );
});
