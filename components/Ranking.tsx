import {
  DisplayBox,
  DisplayBoxCaption,
  DisplayBoxContent,
  List,
  ListItem,
} from "./layout";
import { Player } from "../graphql";
import { StatisticContainer } from "./Statistic";
import InfiniteScroll from "react-infinite-scroller";
import { useState, memo } from "react";
import Skeleton from "react-loading-skeleton";

export type RankingProps = {
  players: Array<Player>;
};

export default memo(function Ranking({ players }: RankingProps) {
  const [loadedPlayers, setLoadedPlayers] = useState<Array<Player>>([]);
  const [hasMore, setMore] = useState(true);

  const loadMore = () => {
    if (loadedPlayers.length >= players.length) {
      setMore(false);
      return;
    }
    setLoadedPlayers((prev) => players.slice(0, prev.length + 10));
  };
  const loader = <Skeleton key={0} height={80} />; //TODO
  const items = (
    <List>
      {loadedPlayers.map((player) => (
        <ListItem
          key={player.tag}
          avatar={
            <DisplayBox
              content={
                <DisplayBoxContent className="text-xs">
                  {player.rank}
                </DisplayBoxContent>
              }
              caption={
                <DisplayBoxCaption className="text-2xs">
                  {player.trophies}
                </DisplayBoxCaption>
              }
              className="rounded p-1 bg-primary-light"
            />
          }
          title={
            <DisplayBox
              content={
                <DisplayBoxContent className="text-base">
                  {player.name}
                </DisplayBoxContent>
              }
              caption={
                player.club ? (
                  <DisplayBoxCaption className="text-xs">
                    {player.club.name}
                  </DisplayBoxCaption>
                ) : undefined
              }
            />
          }
          titleWidth={138}
          titleHeight={37}
          description={
            <StatisticContainer
              playerTag={player.tag}
              outputType="DESCRIPTION"
            />
          }
          thumbnail={
            <StatisticContainer playerTag={player.tag} outputType="THUMBNAIL" />
          }
        />
      ))}
    </List>
  );

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loader={loader}>
      {items}
    </InfiniteScroll>
  );
});
