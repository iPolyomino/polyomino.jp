import Grid from "@mui/material/Grid";

interface Props {
  children?: React.ReactNode;
}

const CenterrizedHorizontalGrid = ({ children }: Props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </Grid>
  );
};

export default CenterrizedHorizontalGrid;
