import { Grade } from "./grade";

export default interface Record {
  sumOfWinLoss: {
    content: string;
    caption: string;
    grade: Grade | string;
    staged: boolean;
  };
  winningPercentage: {
    content: string;
    caption: string;
    grade: Grade | string;
    staged: boolean;
  };
  winningStreak: {
    content: string;
    caption: string;
    grade: Grade | string;
    staged: boolean;
  };
}
