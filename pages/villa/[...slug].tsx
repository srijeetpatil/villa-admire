import Head from "next/head";
import MainDetails from "../../components/detail/MainDetails";
import Layout from "../../components/layouts/Layout";

const Villa = () => {
  return (
    <Layout>
      <Head>
        <title>Villa in Lonavala</title>
      </Head>

      <div className="lg:container px-3 mx-auto mt-32 mb-12">
        <MainDetails />        
      </div>
    </Layout>
  );
};

export default Villa;
