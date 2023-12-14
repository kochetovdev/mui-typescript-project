import { minWidth } from "@/app/_utils";
import {
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const skills = ["Software Dev", "Architect", "Designer", "Business Analist"];

interface Props {
  value: string[] | undefined;
  onChange: (event: SelectChangeEvent<string[]>) => void;
}

const BeautifullSelect = ({ value, onChange }: Props) => {
  return (
    <Select
      id="skill-select"
      renderValue={(select: string[]) => select.join(", ")}
      sx={{
        minWidth: minWidth,
        marginRight: 2,
      }}
      value={value}
      onChange={onChange}
    >
      {skills.map((skillName) => (
        <MenuItem key={skillName} value={skillName}>
          <ListItemText primary={skillName} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default BeautifullSelect;
