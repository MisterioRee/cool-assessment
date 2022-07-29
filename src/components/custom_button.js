import Button from "@mui/material/Button";

function CustomButton(props) {

  const handleClick = () => {
    props.handleClick();
  }

  return (
    <Button variant="contained" onClick={handleClick} >{props.text}</Button>
  );
}

export default CustomButton;