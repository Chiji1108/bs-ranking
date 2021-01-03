import { Brawler } from "../../../graphql";
import { memo, FC } from "react";

interface BrawlerOptionsProps {
  brawlers: Array<Brawler>;
}

const BrawlerOptions = ({ brawlers }: BrawlerOptionsProps) => (
  <>
    {brawlers.map((brawler) => (
      <option key={brawler.id} value={brawler.id}>
        {brawler.name}
      </option>
    ))}
  </>
);

export default memo(BrawlerOptions);
