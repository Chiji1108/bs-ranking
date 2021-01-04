import config from "../../tailwind.config";

const decorationColorReducer = (
  result: "victory" | "defeat" | "draw" | string | undefined
) => {
  switch (result) {
    case "victory":
      return config.theme.extend.colors.game.victory;
    case "defeat":
      return config.theme.extend.colors.game.defeat;
    case "draw":
      return config.theme.extend.colors.game.draw;
    default:
      return config.theme.extend.colors.game.other;
  }
};

export default decorationColorReducer;
