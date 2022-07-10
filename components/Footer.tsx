import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import ContentsCard from "./ContentsCard";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ my: 2 }}>
        <Card>
          <Box p={2} sx={{ textAlign: "right" }}>
            &copy; {new Date().getFullYear()} Hagi
          </Box>
        </Card>
      </Box>
    </footer>
  );
};

export default Footer;
