import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
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
          <Typography variant="body1" color="text.secondary">
            {data.sentence.text}
          </Typography>
        </CardContent>
        <CardActions>
          {data.sentence.links.map((link, i) => (
            <Button href={link.url} size="small" key={i}>
              {link.name}
            </Button>
          ))}
        </CardActions>
      </article>
    </ContentsCard>
  );
};

export default Article;
