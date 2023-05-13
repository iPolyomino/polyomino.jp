import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from '@mui/material/Paper';

import { History } from "@/types/HitAndBlow";

const HitAndBlowAskTable = ({ history }: { history: History[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
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
  )
}

export default HitAndBlowAskTable;
