import { useReducer, createContext, Reducer, ReactNode, Dispatch } from "react";
import { Player } from "../../../graphql";
import { Select } from "../../ui";
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
    <div className="p-1.5">
      <FormReducerContext.Provider value={{ state, dispatch }}>
        <div className="text-body space-x-2 mb-3 ml-1 overflow-x-auto flex flex-nowrap items-center">
          <Select
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
              <option value="cn">🇨🇳中国</option>
              <option value="tw">🇹🇼台湾</option>
              <option value="es">🇪🇸スペイン</option>
              <option value="fr">🇫🇷フランス</option>
              {/* <option value="sg">🇸🇬シンガポール</option> */}
              <option value="us">🇺🇸アメリカ</option>
              <option value="ca">🇨🇦カナダ</option>
              <option value="br">🇧🇷ブラジル</option>
              <option value="dk">🇩🇰デンマーク</option>
              <option value="gb">🇬🇧イギリス</option>
              <option value="my">🇲🇾マレーシア</option>
            </optgroup>
          </Select>
          <BrawlerSelectContainer />
        </div>

        <RankingContainer countryCode={countryCode} brawlerId={brawlerId} />
      </FormReducerContext.Provider>
    </div>
  );
}
