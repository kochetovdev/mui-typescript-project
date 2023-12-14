import { Dayjs } from "dayjs";

export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string | Dayjs;
  preference?: string;
}