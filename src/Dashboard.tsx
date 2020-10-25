
import React, {useState} from 'react';
import Transaction from './chartTypes';
import MyTable from './MyTable';
import MyForm from './MyForm';
import CreateTransaction from './CreateTransaction';
import { generate } from 'shortid';



function createData( id: string, symbol: any, size: any, pnl: any, percent : any ) {
    return {id, symbol, size, pnl, percent};
}

const transactions: Array<Transaction> = [
    createData('1', 'Infy', 6000, 200, 3.3),
    //createData('2', 'Bajaj', 9000, 200, 1.3),
    //createData('3', 'wipro', 8000, 100, 4.3),
    createData('4', 'tcs', 3000, 100, 1.3)
];

export const Dashboard: React.FC<any> = () => {
    const [rows, setTransactions] = useState(transactions);
    return (

        <div>
            <CreateTransaction 
                onSubmit={(transaction: Transaction) => {
                    transaction.id = generate();
                    setTransactions((transactions) => [
                        ...transactions,
                        transaction
                    ]);
                    console.log("Transaction is ", transaction);
                }}

            />
            <MyTable rows={rows} />
        </div>
    );
}