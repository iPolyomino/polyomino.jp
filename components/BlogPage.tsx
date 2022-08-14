import Button from "@mui/material/Button";

import ContentsCard from "./ContentsCard";

interface Props {
  html: string;
}

const BlogPage = (props: Props) => {
  const { html } = props;

  return (
    <ContentsCard>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
      <Button href={"/blog"}>記事一覧ページへ</Button>
    </ContentsCard>
  );
};

export default BlogPage;
