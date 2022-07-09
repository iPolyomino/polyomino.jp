import ContentsCard from "./ContentsCard";

interface Props {
  title: string;
}

const Article = (props: Props) => {
  const { title } = props;
  return (
    <ContentsCard>
      <article>
        <h2>{title}</h2>
      </article>
    </ContentsCard>
  );
};

export default Article;
