import Button from "@mui/material/Button";

import ContentsCard from "./ContentsCard";

interface Props {
  data: { title: string; date: string };
  html: string;
}

const BlogPage = (props: Props) => {
  const { data, html } = props;

  return (
    <ContentsCard>
      <h1>{data.title}</h1>
      <time>{data.date}</time>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
      <Button href={"/blog"}>記事一覧ページへ</Button>
    </ContentsCard>
  );
};

export default BlogPage;
