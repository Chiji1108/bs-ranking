import { Form } from "../components/domain/Form";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BatchHttpLink } from "@apollo/link-batch-http";
import { Hero } from "../components/layout";
import firebase from "firebase/app";
import "firebase/analytics";
import { useEffect } from "react";

const client = new ApolloClient({
  link: new BatchHttpLink({
    uri: "https://asia-northeast1-bs-ranking.cloudfunctions.net/graphql",
    credentials: "include",
    // uri: "http://localhost:4000",
  }),
  cache: new InMemoryCache(),
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
  }, []);
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
          <>ver1.1</>
        }
        thumbnail={<div />}
        className="py-20 px-3 mt-12 mb-6"
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
