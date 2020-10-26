
import React, { useState } from 'react';
import Transaction from './chartTypes';
import CreateTransaction from './CreateTransaction';
import { generate } from 'shortid';
import MyDataTable from './MyDataTable';
import { CellValue, ColDef } from '@material-ui/data-grid';
import TableCell from '@material-ui/core/TableCell';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function createData( id: string, symbol: any, size: any, pnl: any, percent: any ) {
    return { id, symbol, size, pnl, percent };
}
interface DashboardStatus {
    transactions: Array<Transaction>;
    statusObject: any;
}


const transactions: Array<Transaction> = [
    createData( '1', 'Infy', 6000, 200, 3.3 ),
    //createData('2', 'Bajaj', 9000, 200, 1.3),
    //createData('3', 'wipro', 8000, 100, 4.3),
    createData( '4', 'tcs', 3000, 100, 1.3 )
];
let editRowIndex: number | undefined;

const dashboardStatus: DashboardStatus = {
    transactions: transactions,
    statusObject: {
        editRowIndex: -1
    }
};

export const Dashboard: React.FC<any> = () => {




    const [rows, setTransactions] = useState( { transactions } );

    const handleRemove = ( id: CellValue ) => {
        console.log( id );
        setTransactions( ( state ) => {
            state.transactions = transactions.filter( ( transaction ) => transaction.id !== id ) ;
            return state;
        } );
    };

    const handleEdit = ( id: CellValue, rowIndex: number | undefined ) => {
        console.log( id );

        rowEditIndex = rowIndex;

        //setTransactions( ( transactions ) => transactions.filter( ( transaction ) => transaction.id !== id ) );
    };
    let rowEditIndex: number | undefined = -1;

    const columns: ColDef[] = [
        { field: 'symbol', headerName: 'Symbol', width: 150, renderCell: ( { value, rowIndex } ) => <span>{value} - {rowIndex} - edit - {rowEditIndex} </span> },
        { field: 'size', headerName: 'Size', width: 150 },
        { field: 'pnl', headerName: 'PnL', width: 150 },
        { field: 'percent', headerName: 'Percent', width: 150 },
        {
            field: 'id', disableClickEventBubbling: true, headerName: 'Actions', width: 150, renderCell: ( { value, rowIndex } ) => {
                return (
                    <TableCell>
                        <DeleteIcon onClick={() => handleRemove( value )} />
                        <EditIcon onClick={() => handleEdit( value, rowIndex )} />
                    </TableCell>
                )
            }
        },
    ];

    return (

        <div>
            <h2>Add a Transaction</h2>
            <CreateTransaction
                onSubmit={( transaction: Transaction ) => {
                    transaction.id = generate();
                    setTransactions( ( state ) => {
                        state.transactions.push(transaction);
                        return state;

                    } );
                    console.log( "Transaction is ", transaction );
                }}
            />
            <MyDataTable rows={rows.transactions} columns={columns} />
        </div>
    );
}