import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";

import { getPosts, getBlog } from "@/lib/api";
import { markdownToHTML } from "@/lib/markdown";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async (content: GetStaticPropsContext) => {
  if (content.params?.id === undefined) return;
  const { data, article } = getBlog(content.params.id.toString());
  const blog = await markdownToHTML(article);
  return {
    props: {
      data,
      blog,
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

const Blog: NextPage<Props> = ({ data, blog }) => {
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
            <BlogPage data={data} html={blog} />
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
