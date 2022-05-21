import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(leistung, dauer, kosten) {
  return { leistung, dauer, kosten };
}

const rows = [
  createData('Haarschnitt inkl. Styling (Damen)', '60', '65'),
  createData('Haarschnitt (Herren)', '60', '38'),
  createData('Ansatz', '60', '45'),
  createData('Styling', '30', '35'),
  createData('Kind (12-16) Jahre', '30', '25'),
  createData('Global', '60', '70'),
  createData('Hochstecken', '60', '50'),
  createData('Painting', '60', '65-120'),
  createData('Strähnen', '60', '55-120'),
  createData('Augenbrauen zupfen', '5', '8'),
  createData('Augenbrauen färben', '10', '10')
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, background: "#f7f5dc" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Leistung</TableCell>
            <TableCell align="left">Dauer in min</TableCell>
            <TableCell align="right">Preis in €</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.leistung}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.leistung}
              </TableCell>
              <TableCell align="left">{row.dauer}</TableCell>
              <TableCell align="right">{row.kosten}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}