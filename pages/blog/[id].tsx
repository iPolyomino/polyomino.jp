import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "../../components/NavigationBar";
import CenterrizedHorizontalGrid from "../../components/CenterrizedHorizontalGrid";
import RawArticle from "../../components/RawArticle";
import Footer from "../../components/Footer";

import { getPosts, getBlog } from "../../lib/api";
import { markdownToHTML } from "../../lib/markdownToHTML";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async (content: GetStaticPropsContext) => {
  if (content.params?.id === undefined) return;
  const blogText = getBlog(content.params.id.toString());
  const blog = await markdownToHTML(blogText);
  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPosts().map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const BlogPage: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Hagi's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <RawArticle html={blog} />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default BlogPage;
