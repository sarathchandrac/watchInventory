import * as React from 'react';
import Transaction from './chartTypes';

import { DataGrid , ColDef} from '@material-ui/data-grid';

interface Props {
    rows: Array < Transaction >,
    columns: ColDef[]
}


export default function MyDataTable( { rows, columns }: Props) {

    return (
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    );
}
