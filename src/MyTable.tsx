import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Transaction from './chartTypes';

const useStyles = makeStyles( {
    table: {
        minWidth: 650,
        maxWidth: 800
    },
} );
interface Props {
    rows: Array < Transaction >
}
export default function BasicTable( { rows }: Props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell >Account Size</TableCell>
                        <TableCell >PnL</TableCell>
                        <TableCell >% Return</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map( ( row ) => (
                        <TableRow key={row.id}>
                            <TableCell> {row.id} </TableCell>
                            <TableCell >
                                {row.symbol}
                            </TableCell>
                            <TableCell >{row.size}</TableCell>
                            <TableCell >{row.pnl}</TableCell>
                            <TableCell >{row.percent}</TableCell>
                        </TableRow>
                    ) )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
