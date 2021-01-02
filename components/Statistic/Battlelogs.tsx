import { Battlelog } from "../../graphql";
import {
  ThumbnailCard,
  ThumbnailCardContent,
  ThumbnailCardGroup,
  ImageWrapper,
  Image,
  ThumbnailCardCaption,
  AvatarGroup,
  Avatar,
  Badge,
} from "../layout";
import { LazyLoad } from "../lib/LazyLoad";
import { decorationColorReducer, battleTimeReducer } from "../util";
import InfiniteScroll from "react-infinite-scroller";
import { useState, memo } from "react";
import Skeleton from "react-loading-skeleton";

export interface BattlelogsProps {
  battlelogs: Array<Battlelog>;
}

//TODO
const mapImage = {
  width: 120,
  height: 64,
};

const modeIcon = {
  width: 12,
  height: 12,
};

export default memo(function Battlelogs({ battlelogs }: BattlelogsProps) {
  const [loadedBattlelogs, setLoadedBattlelogs] = useState<Array<Battlelog>>(
    []
  );
  const [hasMore, setMore] = useState(true);

  const loadMore = () => {
    if (loadedBattlelogs.length >= battlelogs.length) {
      setMore(false);
      return;
    }
    setLoadedBattlelogs((prev) => battlelogs.slice(0, prev.length + 10));
  };
  const loader = <Skeleton key={0} width={120} />; //TODO
  const items = (
    <ThumbnailCardGroup>
      {loadedBattlelogs.map((battlelog) => (
        <ThumbnailCard
          key={battlelog.battleTime}
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
                        width={mapImage.width}
                        height={mapImage.height}
                        style={{
                          width: mapImage.width,
                          height: mapImage.height,
                        }}
                        grayBg
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
      ))}
    </ThumbnailCardGroup>
  ); //TODO React.memo

  if (battlelogs.length == 0)
    return <div>直近25戦にランクマッチの戦闘データがありませんでした...</div>; //TODO
  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={hasMore}
      loader={loader}
      useWindow={false}
    >
      {items}
    </InfiniteScroll>
  );
});
