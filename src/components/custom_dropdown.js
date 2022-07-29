import {useState} from 'react';
import { FormControl, Select, MenuItem } from "@mui/material";

function CustomDropdown(props) {
    const [selectedValue, setSelectedValue] = useState('+');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        props.handleChange(event.target.value);
    }
    return (
        <FormControl standard>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedValue}
                defaultValue={"+"}
                onChange={handleChange}>
                <MenuItem value={"+"}>+</MenuItem>
                <MenuItem value={"-"}>-</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CustomDropdown;