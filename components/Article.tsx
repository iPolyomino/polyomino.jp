import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import ContentsCard from "./ContentsCard";

import { ArticleData, Media, Link } from "../types/ArticleData";

interface Props {
  data: ArticleData;
}

const Picture = ({ media }: { media: Media }) => (
  <picture>
    {media.webp && <source srcSet={media.webp} type="image/webp" />}
    {media.jpg && <source srcSet={media.jpg} type="image/jpeg" />}
    {media.png && <source srcSet={media.png} type="image/png" />}
    {media.jpg && (
      <CardMedia
        component="img"
        src={media.jpg}
        loading="lazy"
        alt={media.alt}
      />
    )}
    {media.png && (
      <CardMedia
        component="img"
        src={media.png}
        loading="lazy"
        alt={media.alt}
      />
    )}
  </picture>
);

const Links = ({ link }: { link: Link }) => (
  <Button href={link.url} size="small">
    {link.name}
  </Button>
);

const Article = (props: Props) => {
  const { data } = props;

  return (
    <ContentsCard>
      <article>
        {data.media && <Picture media={data.media} />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {data.sentence.text}
          </Typography>
        </CardContent>
        <CardActions>
          {data.sentence.links &&
            data.sentence.links.map((link, i) => <Links link={link} key={i} />)}
        </CardActions>
      </article>
    </ContentsCard>
  );
};

export default Article;
