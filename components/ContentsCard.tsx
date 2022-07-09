import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

interface Props {
  children?: React.ReactNode;
}

const ContentsCard = ({ children }: Props) => {
  return (
    <Card>
      <Box p={2}>{children}</Box>
    </Card>
  );
};

export default ContentsCard;
