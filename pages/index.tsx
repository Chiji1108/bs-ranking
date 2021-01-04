import { Form } from "../components/domain/Form";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BatchHttpLink } from "@apollo/link-batch-http";
import { Hero } from "../components/layout";

const client = new ApolloClient({
  link: new BatchHttpLink({
    uri: "https://asia-northeast1-bs-ranking.cloudfunctions.net/graphql",
    credentials: "include",
  }), //TODO production
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            ブロスタ
            <br />
            ランキング
          </>
        }
        description={
          // <>
          //   ・ランカー最新編成
          //   <br />
          //   ・連勝記録
          //   <br />
          //   ・マップ画像
          //   <br />
          //   <span className="text-sm">も見れます</span>
          // </>
          <>ランカー編成も見れます</>
        }
        thumbnail={<div />}
        className="py-20 px-6 mt-12 mb-6"
      />
      <main>
        <ApolloProvider client={client}>
          <Form />
        </ApolloProvider>
      </main>
      <footer className="text-body-muted text-xs font-light text-center mt-12 p-3">
        <div>
          Created by{" "}
          <a href="https://twitter.com/miririmon" className="underline">
            @miririmon
          </a>
        </div>
        <div className="w-4/5 h-px bg-body-muted mt-2 mb-4 mx-auto" />
        このコンテンツは非公式であり、Supercellによる承認を受けていません。ファンコンテンツに関する詳細は、Supercellのファンコンテンツポリシーをご覧ください（
        <a
          href="http://www.supercell.com/fan-content-policy"
          className="underline"
        >
          www.supercell.com/fan-content-policy
        </a>
        ）。
      </footer>
    </>
  );
}
