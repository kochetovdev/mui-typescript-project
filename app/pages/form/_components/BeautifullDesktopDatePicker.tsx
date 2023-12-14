import { minWidth } from "@/app/_utils";
import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface Props {
  value: string | Dayjs | undefined;
  onChange: (value: string | Dayjs | null | undefined) => void;
}

const BeautifullDesktopDatePicker = ({ value, onChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date"
        format="MM/DD/YYYY"
        slots={{
          textField: (params) => (
            <TextField {...params} sx={{ minWidth: minWidth }} />
          ),
        }}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export default BeautifullDesktopDatePicker;
