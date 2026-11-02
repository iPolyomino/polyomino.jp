import RawArticle from "@/components/RawArticle";

interface Props {
  html: string;
}

const TRPG = ({ html }: Props) => {
  return <RawArticle html={html} />;
};

export default TRPG;
