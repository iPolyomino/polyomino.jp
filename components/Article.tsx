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

const source = (filename: string) => `/images/${filename}`;

const Picture = ({ media }: { media: Media }) => (
  <CardMedia style={{ height: "min(300px, 50vw)" }}>
    <picture>
      {media.webp && <source srcSet={source(media.webp)} type="image/webp" />}
      {media.jpg && <source srcSet={source(media.jpg)} type="image/jpeg" />}
      {media.png && <source srcSet={source(media.png)} type="image/png" />}
      {media.jpg && (
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={source(media.jpg)}
          alt={media.alt}
          loading="lazy"
        />
      )}
      {media.png && (
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={source(media.png)}
          alt={media.alt}
          loading="lazy"
        />
      )}
    </picture>
  </CardMedia>
);

const Links = ({ link }: { link: Link }) => (
  <Button href={link.url} variant="outlined">
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
          <Typography gutterBottom variant="h5">
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
