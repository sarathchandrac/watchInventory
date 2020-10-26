import { Button } from '@material-ui/core';
import { Form, Formik, Field } from 'formik';
import * as React from 'react';
import Transaction from './chartTypes';
import { MyField } from './MyField';

interface Props {
    onSubmit: ( values: Transaction ) => void;
};

const initialValue: Transaction = 
    {
        id: '1',
        symbol: 'Infy',
        size: 5000,
        pnl: 100,
        percent: 3
    }
;

const CreateTransaction: React.FC<Props> = ( { onSubmit } ) => {
    return (
        <Formik
            initialValues={initialValue}
            onSubmit={ values => {
                onSubmit( values );
            }}
        >
            { ( { values  } ) => (
                <Form>
                    <div>
                        <Field 
                            name="symbol"
                            placeholder="Symbol"
                            component={MyField}
                        />
                    </div>
                    <div>
                        <Field 
                            name="size"
                            placeholder="Size"
                            component={MyField}
                        />
                    </div>

                    <div>
                        <Field 
                            name="pnl"
                            placeholder="PnL"
                            component={MyField}
                        />
                    </div>
                    
                    <div>
                        <Field 
                            name="percent"
                            placeholder="Percent"
                            component={MyField}
                        />
                    </div>

                    <Button variant="contained" type="submit" >Submit</Button>

                </Form>
            )
            }</Formik>
    )
};
export default CreateTransaction;
