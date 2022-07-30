import ContentsCard from "./ContentsCard";

interface Props {
  html: string;
}

const RawArticle = (props: Props) => {
  const { html } = props;

  return (
    <ContentsCard>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </ContentsCard>
  );
};

export default RawArticle;
