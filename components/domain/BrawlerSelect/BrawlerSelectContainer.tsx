import { gql, useQuery } from "@apollo/client";
import { Brawler } from "../../../graphql";
import dataJson from "../../mock/brawlers.json";
import BrawlerSelect from "./BrawlerSelect";
import Skeleton from "react-loading-skeleton";

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
  // console.log("BrawlerSelectContainer rendering");
  const { loading, error, data } = useQuery<BrawlersData>(GET_BRAWLERS);

  if (loading)
    return (
      <div className="inline-block">
        <Skeleton height={40} width={166} />
      </div>
    );
  if (error) {
    return <p className='text-body'>{error.message}</p>;
  }
  if (!data) return <p className="text-body">キャラデータの取得ができません</p>;

  // const data = dataJson.data;

  return <BrawlerSelect brawlers={[...data.brawlers]} />;
}
