import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface Props {
  children?: React.ReactNode;
}

const CenterrizedHorizontalGrid = ({ children }: Props) => {
  return (
    <Grid
      container
      columns={12}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} display="grid" gap={4} py={2}>
        <Box sx={{ mx: 2 }}>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default CenterrizedHorizontalGrid;
