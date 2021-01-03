import { gql, useQuery } from "@apollo/client";
import { Brawler } from "../../../graphql";
// import data from "../../mock/brawlers.json";
import BrawlerOptions from "./BrawlerOptions";

const GET_BRAWLERS = gql`
  query getBrawlers {
    brawlers {
      id
      name
    }
  }
`;

interface BrawlersData {
  brawlers: Array<Brawler>;
}

export default function BrawlerOptionsContainer() {
  const { loading, error, data } = useQuery<BrawlersData>(GET_BRAWLERS);

  if (loading) return <p>ローディング中</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>データ無し</p>;

  return <BrawlerOptions brawlers={[...data.brawlers]} />;
}
