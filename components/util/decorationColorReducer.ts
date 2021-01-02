import { Color } from "../../styles";

const decorationColorReducer = (
  result: "victory" | "defeat" | "draw" | string
) => {
  switch (result) {
    case "victory":
      return Color.Game.VICTORY;
    case "defeat":
      return Color.Game.DEFEAT;
    case "draw":
    default:
      return Color.Game.DRAW;
  }
};

export default decorationColorReducer;
