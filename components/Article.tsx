import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import ContentsCard from "@/components/ContentsCard";

import { ArticleData, Media, Link } from "@/types/ArticleData";

interface Props {
  data: ArticleData;
}

const source = (filename: string) => `/images/${filename}`;

const Picture = ({ media }: { media: Media }) => {
  const fallbackImage = media.jpg ?? media.png ?? media.webp;

  if (!fallbackImage) return null;

  return (
    <CardMedia style={{ height: "min(300px, 50vw)", position: "relative" }}>
      <picture>
        {media.webp && <source srcSet={source(media.webp)} type="image/webp" />}
        <Image
          src={source(fallbackImage)}
          alt={media.alt}
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          style={{ objectFit: "cover" }}
        />
      </picture>
    </CardMedia>
  );
};

const Links = ({ link }: { link: Link }) => (
  <Button rel={link.rel} href={link.url} variant="outlined">
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
          <Grid container spacing={1}>
            {data.sentence.links &&
              data.sentence.links.map((link, i) => (
                <Grid key={i}>
                  <Links link={link} />
                </Grid>
              ))}
          </Grid>
        </CardActions>
      </article>
    </ContentsCard>
  );
};

export default Article;
