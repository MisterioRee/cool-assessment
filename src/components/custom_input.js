import { TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    input: {
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
});

function CustomInput(props) {
    const classes = useStyles();
    return (
        <TextField
            variant="outlined"
            size="small"
            type="number"
            className={classes.input}
            onChange={e=>props.handleChange(e)}
        />
    );
}

export default CustomInput;