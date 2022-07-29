import { useState, useEffect } from 'react';
import TableRow from './table_row.js';
import Container from '@mui/material/Container';
import CustomButton from '../components/custom_button.js';
import { getRandomInt, convertOperatorToOperation } from '../helpers/index';

function Table() {
    const [rows, setRows] = useState([
        { id: 0, status: true, amount: 0, operation: 'add' },
    ]);

    useEffect(() => {
        const handleTotalAmount = () => {
            let total = 0;
            rows.forEach(row => {
                if (row.status) {
                    if (row.operation === 'add') {
                        total += isNaN(row.amount) ? 0 : row.amount;
                    }
                    else if (row.operation === 'subtract') {
                        total -= isNaN(row.amount) ? 0 : row.amount;
                    }
                }
            });
            setTotalAmount(total);
        }

        handleTotalAmount();  // update total amount
    }, [rows]);

    const [totalAmount, setTotalAmount] = useState(0);

    const handleAddRow = () => {
        const randomId = getRandomInt(0, 100);
        setRows([...rows, { id: randomId, status: true, amount: 0, operation: 'add' }]); // add new row
    }

    const handleDeleteRow = (id) => {
        setRows(rows.filter((row => row.id !== id))); // remove row

    }

    const handleOperationChange = (id, operation) => {
        const newOperation = convertOperatorToOperation(operation);
        setRows(rows.map((row) => {
            if (row.id === id) {
                row.operation = newOperation;
            }
            return row;
        }));
    }

    const handleDisableRow = (id) => {
        const newRows = [...rows]; // copy the array
        newRows.map((row => {
            if (row.id === id) {
                row.status = !row.status;
            }
            return row;
        }));
        setRows(newRows); // update the state
    }

    const handleAmountChange = (row, e) => {
        const newRows = [...rows]; // copy the array
        const newAmount = parseInt(e.target.value); // get the new amount
        newRows.forEach((newRow) => { // update the amount
            if (newRow.id === row.id) {
                newRow.amount = newAmount;
            }
        });
        setRows(newRows); // update the state
    }

    return (
        <Container>
            <CustomButton text={"Add Row"} handleClick={handleAddRow} />
            {rows.map((row) => (
                <TableRow key={row.id}
                    handleDeleteRow={() => handleDeleteRow(row.id)}
                    amountChange={(e) => { handleAmountChange(row, e) }}
                    handleDisableRow={() => handleDisableRow(row.id)}
                    handleOperationChange={(e) => { handleOperationChange(row.id, e) }}
                    row={row}
                />
            ))}
            <span> Result: {totalAmount} </span>
        </Container>
    )
}

export default Table;