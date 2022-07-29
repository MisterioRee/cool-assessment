
import CustomButton from '../components/custom_button';
import CustomDropdown from '../components/custom_dropdown';
import CustomInput from '../components/custom_input';

function TableRow(props) {

    return (<div>
        <CustomDropdown handleChange={props.handleOperationChange}/>
        <CustomInput handleChange={props.amountChange} />
        <CustomButton text={"Delete"} handleClick={props.handleDeleteRow} />
        <CustomButton text={ props.row.status? "Disable":"Enable"} handleClick={props.handleDisableRow} />
    </div>)
}

export default TableRow;