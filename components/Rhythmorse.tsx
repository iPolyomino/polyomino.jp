import RawArticle from "@/components/RawArticle";

interface Props {
  html: string;
}

const Rythmorse = ({ html }: Props) => {
  return <RawArticle html={html} />;
};

export default Rythmorse;
