export default interface Battlelog {
  battleTime: string;
  event: {
    map: {
      name: string;
      imageUrl: string;
    };
    mode: {
      name: string;
      imageUrl: string;
    };
  };
  result: string;
  picks: {
    tag: string;
    brawler: {
      name: string;
      imageUrl: string;
    };
  }[];
}
