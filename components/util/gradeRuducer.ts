import { Grade } from "../../graphql";
import config from "../../tailwind.config";

export const gradeReducer = (grade: Grade) => {
  if (grade) {
    switch (grade) {
      case "GOD":
        return config.theme.extend.colors.grade.god;
      case "GREAT":
        return config.theme.extend.colors.grade.great;
      case "GOOD":
        return config.theme.extend.colors.grade.good;
      case "SOSO":
        return config.theme.extend.colors.grade.soso;
      case "BAD":
        return config.theme.extend.colors.grade.bad;
    }
  }
};
