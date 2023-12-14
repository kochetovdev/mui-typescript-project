import { minWidth } from "@/app/_utils";
import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

const roles = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];

interface Props {
  value: string;
  onInputChange: (event: SyntheticEvent<Element, Event>, value: string) => void;
}

const BeautifullAutocomplete = ({ value, onInputChange }: Props) => {
  return (
    <Autocomplete
      sx={{ minWidth: minWidth }}
      options={roles}
      renderInput={(params) => (
        <TextField name="role" {...params} sx={{ minWidth: minWidth }} />
      )}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => <li key={option} {...props}>{`${option}`}</li>}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      value={value || ""}
      onInputChange={onInputChange}
    />
  );
};

export default BeautifullAutocomplete;
