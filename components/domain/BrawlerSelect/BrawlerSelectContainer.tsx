import { gql, useQuery } from "@apollo/client";
import { Brawler } from "../../../graphql";
import dataJson from "../../mock/brawlers.json";
import BrawlerOptions from "./BrawlerSelect";

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

export default function BrawlerSelectContainer() {
  console.log("BrawlerSelectContainer rendering");
  // const { loading, error, data } = useQuery<BrawlersData>(GET_BRAWLERS);

  // if (loading) return <p>ローディング中</p>;
  // if (error) {
  //   console.log(error);
  //   return <p>{error.message}</p>;
  // }
  // if (!data) return <p>データ無し</p>;
  // console.log(data);

  const data = dataJson.data;

  return <BrawlerOptions brawlers={[...data.brawlers]} />;
}
