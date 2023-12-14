import { minWidth } from "@/app/_utils";
import { TextField, TextFieldProps } from "@mui/material";

const BeautifullTextField = ({ value, onChange }: TextFieldProps) => {
  return (
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: minWidth,
        marginRight: 2,
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default BeautifullTextField;
