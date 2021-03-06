import { Battlelog } from "../../../graphql";
import {
  ThumbnailCard,
  ThumbnailCardContent,
  ImageWrapper,
  Image,
  ThumbnailCardCaption,
  Avatar,
  Badge,
} from "../../layout";
import { LazyLoad } from "../../lib/LazyLoad";
import { decorationColorReducer, battleTimeReducer } from "../../util";
import { memo } from "react";
import Skeleton from "react-loading-skeleton";
import { FixedSizeList, ListChildComponentProps, areEqual } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import cn from "classnames";

export interface BattlelogsProps {
  battlelogs: Array<Battlelog>;
  playerTag: string;
}

//TODO: responsive
const mapImage = {
  width: 120,
  height: 66,
};

const modeIcon = {
  width: 12,
  height: 12,
};

export default memo(function Battlelogs({
  battlelogs,
  playerTag,
}: BattlelogsProps) {
  const Column = memo(
    ({ index, style }: ListChildComponentProps) => (
      <div style={style}>
        <ThumbnailCard
          key={battlelogs[index].battleTime}
          content={
            <ThumbnailCardContent
              decorationColor={decorationColorReducer(battlelogs[index].result)}
              image={
                battlelogs[index].event ? (
                  <LazyLoad width={mapImage.width} height={mapImage.height}>
                    <ImageWrapper
                      width={mapImage.width}
                      height={mapImage.height}
                    >
                      <Image
                        fallback={
                          <div
                            style={{
                              width: mapImage.width,
                              height: mapImage.height,
                            }}
                          >
                            {battlelogs[index].event.map.name}
                          </div>
                        }
                        src={battlelogs[index].event.map.imageUrl}
                        alt={battlelogs[index].event.map.name}
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
                  <div
                    style={{
                      width: mapImage.width,
                      height: mapImage.height,
                    }}
                    css="background-image: /* tint image */ linear-gradient(
                            to right,
                            rgba(192, 192, 192, 0.75),
                            rgba(192, 192, 192, 0.75)
                          ),
                          /* checkered effect */ linear-gradient(to right, black 50%, white 50%),
                          linear-gradient(to bottom, black 50%, white 50%);
                        background-blend-mode: normal, difference, normal;
                        background-size: 2em 2em;"
                  ></div>
                )
              }
            />
          }
          caption={
            <ThumbnailCardCaption
              content={
                battlelogs[index].event ? (
                  <Badge
                    className="text-body"
                    icon={
                      <LazyLoad width={modeIcon.width} height={modeIcon.height}>
                        <Image
                          className="object-contain"
                          width={modeIcon.width}
                          height={modeIcon.height}
                          style={{
                            width: modeIcon.width,
                            height: modeIcon.height,
                          }}
                          src={battlelogs[index].event.mode.imageUrl}
                          alt={battlelogs[index].event.mode.name}
                          fallback={
                            <div
                              style={{
                                width: modeIcon.width,
                                height: modeIcon.height,
                              }}
                              className="bg-gray-400 flex items-center justify-start text-xs whitespace-nowrap overflow-x-auto"
                            >
                              {battlelogs[index].event.mode.name}
                            </div>
                          }
                        />
                      </LazyLoad>
                    }
                  >
                    {battlelogs[index].event.map.name}
                  </Badge>
                ) : (
                  <Badge className="text-body">カスタムマップ</Badge>
                )
              }
              badge={
                <div className="flex flex-row-reverse flex-nowrap items-end space-x-reverse -space-x-0.5">
                  {battlelogs[index].picks.map((pick) => (
                    <Avatar
                      key={pick.tag}
                      src={pick.brawler.imageUrl}
                      alt={pick.brawler.name}
                      size={playerTag == pick.tag ? 20 : 16}
                      className="ring-2 ring-primary-dark ring-opacity-100"
                    />
                  ))}
                </div>
              }
            />
          }
          badge={
            <Badge className="text-body-muted">
              {battleTimeReducer(battlelogs[index].battleTime)}
            </Badge>
          }
        />
      </div>
    ),
    areEqual
  );

  if (battlelogs.length == 0)
    return (
      <p className="text-body-muted text-xs">
        直近25戦にランクマッチはありませんでした
      </p>
    );
  // console.log(`battlelogs.length: ${battlelogs.length}`);
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          width={width}
          height={height}
          itemCount={battlelogs.length}
          itemSize={mapImage.width + 10}
          layout="horizontal"
        >
          {Column}
        </FixedSizeList>
      )}
    </AutoSizer>

    // <FixedSizeList
    //   width={180}
    //   height={180}
    //   itemCount={battlelogs.length}
    //   itemSize={mapImage.width + 10}
    //   layout="horizontal"
    // >
    //   {Column}
    // </FixedSizeList>

    // <FixedSizeList
    //   height={75}
    //   itemCount={1000}
    //   itemSize={100}
    //   layout="horizontal"
    //   width={300}
    // >
    //   {Column}
    // </FixedSizeList>

    // <ThumbnailCard
    //   key={battlelogs[0].battleTime}
    //   content={
    //     <ThumbnailCardContent
    //       decorationColor={decorationColorReducer(battlelogs[0].result)}
    //       image={
    //         battlelogs[0].event ? (
    //           <LazyLoad width={mapImage.width} height={mapImage.height}>
    //             <ImageWrapper
    //               width={mapImage.width}
    //               height={mapImage.height}
    //               // scrollable
    //             >
    //               <Image
    //                 fallback={
    //                   <div
    //                     style={{
    //                       width: mapImage.width,
    //                       height: mapImage.height,
    //                     }}
    //                   >
    //                     {battlelogs[0].event.map.name}
    //                   </div>
    //                 }
    //                 src={battlelogs[0].event.map.imageUrl}
    //                 alt={battlelogs[0].event.map.name}
    //                 width={mapImage.width}
    //                 height={mapImage.height}
    //                 style={{
    //                   width: mapImage.width,
    //                   height: mapImage.height,
    //                 }}
    //                 grayBg
    //                 className="object-cover object-center transform scale-110"
    //               />
    //             </ImageWrapper>
    //           </LazyLoad>
    //         ) : (
    //           <div>イベントデータ無し</div> //TODO
    //         )
    //       }
    //     />
    //   }
    //   caption={
    //     <ThumbnailCardCaption
    //       content={
    //         battlelogs[0].event ? (
    //           <Badge
    //             className="text-body"
    //             icon={
    //               <LazyLoad width={modeIcon.width} height={modeIcon.height}>
    //                 <Image
    //                   width={modeIcon.width}
    //                   height={modeIcon.height}
    //                   src={battlelogs[0].event.mode.imageUrl}
    //                   alt={battlelogs[0].event.mode.name}
    //                   fallback={
    //                     <div
    //                       style={{
    //                         width: modeIcon.width,
    //                         height: modeIcon.height,
    //                       }}
    //                       className="bg-gray-400 flex items-center justify-start text-xs whitespace-nowrap overflow-x-auto"
    //                     >
    //                       {battlelogs[0].event.mode.name}
    //                     </div>
    //                   }
    //                 />
    //               </LazyLoad>
    //             }
    //           >
    //             {battlelogs[0].event.map.name}
    //           </Badge> //TODO icon
    //         ) : (
    //           <div>イベントデータ無し</div>
    //         )
    //       }
    //       badge={
    //         <div className="flex flex-row-reverse flex-nowrap space-x-reverse -space-x-0.5">
    //           {battlelogs[0].picks.map((pick) => (
    //             <Avatar
    //               key={pick.tag}
    //               src={pick.brawler.imageUrl}
    //               alt={pick.brawler.name}
    //               size={16}
    //             />
    //           ))}
    //         </div>
    //       }
    //     />
    //   }
    //   badge={
    //     <Badge className="text-body-muted">
    //       {battleTimeReducer(battlelogs[0].battleTime)}
    //     </Badge>
    //   }
    // />
  );
});
