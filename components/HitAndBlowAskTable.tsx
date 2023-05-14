import React from "react";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from '@mui/material/Paper';

import { History } from "@/types/HitAndBlow";

const HitAndBlowAskTable = ({ history }: { history: History[] }) => {
  return (
    <>
      <Typography variant="h5" sx={{ my: 1 }}>History</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Number
              </TableCell>
              <TableCell>
                Hit
              </TableCell>
              <TableCell>
                Blow
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((h) => (
              <TableRow key={h.ask.join('')}>
                <TableCell>
                  {h.ask.join('')}
                </TableCell>
                <TableCell>
                  {h.hit} hit
                </TableCell>
                <TableCell>
                  {h.blow} blow
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default HitAndBlowAskTable;
