import Head from "next/head";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>To_Do-NextJS</title>
      </Head>

      <div>
        <PageTitle>TODO LIST</PageTitle>
        <div>
          <AppHeader />
          <AppContent />
        </div>
      </div>
    </div>
  );
}
