import { Form } from "../components/domain/Form";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BatchHttpLink } from "@apollo/link-batch-http";

const client = new ApolloClient({
  link: new BatchHttpLink({ uri: "http://localhost:4000" }), //TODO production
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <main className="bg-primary">
      <section>
        <h3 className="font-bold text-4xl text-body">ブロスタランキング</h3>
      </section>
      <section>
        <ApolloProvider client={client}>
          <Form />
        </ApolloProvider>
      </section>
    </main>
  );
}
