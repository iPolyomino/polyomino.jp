import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

const Footer = () => {
  return (
    <footer>
      <Card>
        <Box p={2} sx={{ textAlign: "right" }}>
          &copy; {new Date().getFullYear()} Hagi
        </Box>
      </Card>
    </footer>
  );
};

export default Footer;
