export default interface Player {
  tag: string;
  rank: number;
  trophies: number;
  name: string;
  club: { name: string } | null;
}
