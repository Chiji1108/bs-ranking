import dayjs from "dayjs";
import "dayjs/locale/ja"; // ES 2015
dayjs.locale("ja"); // use locale globally
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const battleTimeReducer = (battleTime: string) => {
  return dayjs(battleTime).fromNow();
};

export default battleTimeReducer;
