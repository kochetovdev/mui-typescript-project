import { minWidth } from "@/app/_utils";
import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  value: string | undefined;
  defaultPreference: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const BeautifullRadios = ({ value, onChange, defaultPreference }: Props) => {
  return (
    <FormGroup
      sx={{
        minWidth: minWidth,
        marginRight: { md: 2 },
        marginBottom: { xs: 2, md: 0 },
      }}
    >
      <FormLabel component="legend">Work Preference</FormLabel>
      <RadioGroup
        id="preference-type-radio"
        name="preference"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel
          label={defaultPreference}
          value={defaultPreference}
          control={<Radio />}
        />
        <FormControlLabel label="Hybrid" value="Hybrid" control={<Radio />} />
        <FormControlLabel
          label="In Office"
          value="In Office"
          control={<Radio />}
        />
      </RadioGroup>
    </FormGroup>
  );
};

export default BeautifullRadios;
