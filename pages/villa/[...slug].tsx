import Head from "next/head";
import MainDetails from "../../components/detail/MainDetails";
import Layout from "../../components/layouts/Layout";

const Villa = () => {
  return (
    <Layout navbarBackground="transparent">
      <Head>
        <title>Villa in Lonavala</title>
      </Head>

      <div className="lg:container px-3 mx-auto mt-24 lg:mt-28 mb-12">
        <MainDetails />
      </div>
    </Layout>
  );
};

export default Villa;
