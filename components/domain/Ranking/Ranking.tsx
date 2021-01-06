import {
  DisplayBox,
  DisplayBoxCaption,
  DisplayBoxContent,
  List,
  ListItem,
} from "../../layout";
import { Player } from "../../../graphql";
import { StatisticContainer } from "../Statistic";
import InfiniteScroll from "react-infinite-scroller";
import { useContext, memo } from "react";
import Skeleton from "react-loading-skeleton";
import { FormReducerContext, ActionType } from "../Form";
import cn from "classnames";

export type RankingProps = {
  players: Array<Player>;
};

export default memo(function Ranking({ players }: RankingProps) {
  const { state, dispatch } = useContext(FormReducerContext);
  const { loadedPlayers, hasMore } = state;
  const loadMore = () => {
    if (loadedPlayers.length >= players.length) {
      dispatch({
        type: ActionType.SET_MORE,
        payload: { ...state, hasMore: false },
      });
      return;
    }
    dispatch({
      type: ActionType.SET_PLAYERS,
      payload: {
        ...state,
        loadedPlayers: players.slice(0, loadedPlayers.length + 10),
      },
    });
  };
  const loader = <Skeleton key={0} height={80} duration={0.6} />; //TODO
  const items = (
    <List>
      {loadedPlayers.map((player) => (
        <ListItem
          key={player.tag}
          avatar={
            <DisplayBox
              content={
                <DisplayBoxContent className="text-xs text-body">
                  {player.rank}
                </DisplayBoxContent>
              }
              caption={
                <DisplayBoxCaption className="text-2xs">
                  {player.trophies}
                </DisplayBoxCaption>
              }
              className={cn("rounded p-1 bg-primary-light", {
                "ring-2 ring-medal-gold": player.rank == 1,
                "ring-2 ring-medal-silver": player.rank == 2,
                "ring-2 ring-medal-bronze": player.rank == 3,
              })}
            />
          }
          title={
            <DisplayBox
              content={
                <DisplayBoxContent className="text-base text-body">
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
          width={142}
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
