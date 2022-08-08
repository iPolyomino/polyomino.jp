import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import ContentsCard from "./ContentsCard";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";

import { default as morse } from "../contents/morse.json";

const Morse = () => {
  const dit = "&bull;";
  const dah = "&ndash;";
  const encode = (code: string) => code.replace(/\./g, dit).replace(/-/g, dah);

  return (
    <ContentsCard>
      <CenterrizedHorizontalGrid>
        <Typography variant="h4">Morse code</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>English</TableCell>
                <TableCell>phonetic alphabet</TableCell>
                <TableCell>Morse</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {morse.map((row) => (
                <TableRow key={row.letter}>
                  <TableCell component="th" scope="row">
                    {row.letter}
                  </TableCell>
                  <TableCell>{row.phonetic}</TableCell>
                  <TableCell>
                    <span
                      style={{ fontWeight: 20, letterSpacing: "0.5rem" }}
                      dangerouslySetInnerHTML={{ __html: encode(row.code) }}
                    ></span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CenterrizedHorizontalGrid>
    </ContentsCard>
  );
};

export default Morse;
