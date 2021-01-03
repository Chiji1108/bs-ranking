import { Brawler } from "../../../graphql";
import { memo, useContext } from "react";
import { FormReducerContext, ActionType } from "../Form";

const brawlerIdReducer = (value: string): number | "" => {
  if (value == "") {
    return value;
  } else {
    return Number(value);
  }
};

interface BrawlerOptionsProps {
  brawlers: Array<Brawler>;
}

const BrawlerOptions = ({ brawlers }: BrawlerOptionsProps) => {
  const { state, dispatch } = useContext(FormReducerContext);
  const { brawlerId } = state;
  return (
    <select
      value={brawlerId}
      onChange={(event) =>
        dispatch({
          type: ActionType.CHANGE_BRAWLER,
          payload: {
            ...state,
            brawlerId: brawlerIdReducer(event.target.value),
          },
        })
      }
    >
      <option value="">合計トロフィー</option>
      <optgroup label="キャラ別">
        {brawlers.map((brawler) => (
          <option key={brawler.id} value={brawler.id}>
            {brawler.name}
          </option>
        ))}
      </optgroup>
    </select>
  );
};

export default memo(BrawlerOptions);
