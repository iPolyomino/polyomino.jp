import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ContentsCard from "./ContentsCard";

import { ArticleData } from "../types/ArticleData";

interface Props {
  data: ArticleData;
}

const Article = (props: Props) => {
  const { data } = props;

  return (
    <ContentsCard>
      <article>
        <picture>
          {data.media.webp && (
            <source srcSet={data.media.webp} type="image/webp" />
          )}
          {data.media.jpg && (
            <source srcSet={data.media.jpg} type="image/jpeg" />
          )}
          {data.media.png && (
            <source srcSet={data.media.png} type="image/png" />
          )}
          {data.media.jpg && (
            <CardMedia
              component="img"
              src={data.media.jpg}
              loading="lazy"
              alt={data.media.alt}
            />
          )}
          {data.media.png && (
            <CardMedia
              component="img"
              src={data.media.png}
              loading="lazy"
              alt={data.media.alt}
            />
          )}
        </picture>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
        </CardContent>
      </article>
    </ContentsCard>
  );
};

export default Article;
