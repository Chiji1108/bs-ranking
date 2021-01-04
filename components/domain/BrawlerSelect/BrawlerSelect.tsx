import { Brawler } from "../../../graphql";
import { memo, useContext } from "react";
import { FormReducerContext, ActionType } from "../Form";
import { Select } from "../../ui";

const brawlerIdReducer = (value: string): number | "" => {
  if (value == "") {
    return value;
  } else {
    return Number(value);
  }
};

interface BrawlerSelectProps {
  brawlers: Array<Brawler>;
}

const BrawlerSelect = ({ brawlers }: BrawlerSelectProps) => {
  const { state, dispatch } = useContext(FormReducerContext);
  const { brawlerId } = state;
  return (
    <Select
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
      <optgroup label="キャラ">
        {brawlers.map((brawler) => (
          <option key={brawler.id} value={brawler.id}>
            {brawler.name}
          </option>
        ))}
      </optgroup>
    </Select>
  );
};

export default memo(BrawlerSelect);
