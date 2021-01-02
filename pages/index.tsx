import Head from "next/head";
import { WireFrame } from "../components/layout/ThumbnailCard/ThumbnailCardGroup/ThumbnailCardGroup.stories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next.js</h1>
      <WireFrame>
        <div className="w-80 h-36 bg-blue-400">children</div>
        <div className="w-80 h-36 bg-red-400">children</div>
        <div className="w-80 h-36 bg-blue-400">children</div>
        <div className="w-80 h-36 bg-red-400">children</div>
        <div className="w-80 h-36 bg-blue-400">children</div>
        <div className="w-80 h-36 bg-red-400">children</div>
      </WireFrame>
    </div>
  );
}
