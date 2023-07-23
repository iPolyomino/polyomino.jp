import type { NextPage } from "next";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";

import { getPosts, getBlog } from "@/lib/api";
import { markdownToHTML } from "@/lib/markdown";

interface Props {
  data: { title: string; description: string; keywords: string; date: string; };
  html: string;
}

export const getStaticProps = async (content: GetStaticPropsContext) => {
  if (content.params?.id === undefined) return;
  const { data, article } = getBlog(content.params.id.toString());
  const html = await markdownToHTML(article);
  return {
    props: {
      data,
      html,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((fileName) => {
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

const Blog: NextPage<Props> = ({ data, html }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
        <meta name="author" content="Hagi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <BlogPage data={data} html={html} />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Blog;
