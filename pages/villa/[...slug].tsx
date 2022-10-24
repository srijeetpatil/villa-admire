import Head from "next/head";
import MainDetails from "../../components/detail/MainDetails";
import Photos from "../../components/detail/Photos";
import Layout from "../../components/layouts/Layout";

const Villa = () => {
  return (
    <Layout>
      <Head>
        <title>Villa in Lonavala</title>
      </Head>

      <div className="lg:container px-3 mx-auto mt-32">
        <Photos />
        <MainDetails />
      </div>
    </Layout>
  );
};

export default Villa;
