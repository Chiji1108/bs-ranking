import { useReducer, createContext, Reducer, ReactNode, Dispatch } from "react";
import { Player } from "../../../graphql";
import { BrawlerSelectContainer } from "../BrawlerSelect";
import { RankingContainer } from "../Ranking";

export interface State {
  countryCode: string;
  brawlerId: number | "";
  loadedPlayers: Array<Player>;
  hasMore: boolean;
}

export interface Action {
  type: ActionType;
  payload: State;
}

const initialState: State = {
  countryCode: "global",
  brawlerId: "",
  loadedPlayers: [],
  hasMore: true,
};

export enum ActionType {
  CHANGE_COUNTRY,
  CHANGE_BRAWLER,
  SET_PLAYERS,
  SET_MORE,
}

const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_COUNTRY:
      return {
        ...prevState,
        countryCode: action.payload.countryCode,
        loadedPlayers: [],
        hasMore: true,
      };
    case ActionType.CHANGE_BRAWLER:
      return {
        ...prevState,
        brawlerId: action.payload.brawlerId,
        loadedPlayers: [],
        hasMore: true,
      };
    case ActionType.SET_PLAYERS:
      return { ...prevState, loadedPlayers: action.payload.loadedPlayers };
    case ActionType.SET_MORE:
      return { ...prevState, hasMore: action.payload.hasMore };
    default:
      return prevState;
  }
};

export const FormReducerContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { countryCode, brawlerId } = state;
  return (
    <div>
      <h1>Ranking</h1>
      <select
        value={countryCode}
        onChange={(event) =>
          dispatch({
            type: ActionType.CHANGE_COUNTRY,
            payload: { ...state, countryCode: event.target.value },
          })
        }
      >
        <option value="global">グローバル</option>
        <optgroup label="ローカル">
          <option value="jp">🇯🇵日本</option>
          <option value="kr">🇰🇷韓国</option>
        </optgroup>
      </select>
      <BrawlerSelectContainer />

      <FormReducerContext.Provider value={{ state, dispatch }}>
        <RankingContainer countryCode={countryCode} brawlerId={brawlerId} />
      </FormReducerContext.Provider>
    </div>
  );
}
