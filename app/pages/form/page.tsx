"use client";

import { contactData } from "@/app/_data/data";
import { FormValues } from "@/app/_types";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormGroup,
  Paper,
  SelectChangeEvent,
  Stack
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import BeautifullAutocomplete from "./_components/BeautifillAutocomplete";
import BeautifullDesktopDatePicker from "./_components/BeautifullDesktopDatePicker";
import BeautifullRadios from "./_components/BeautifullRadios";
import BeautifullSelect from "./_components/BeautifullSelect";
import BeautifullTextField from "./_components/BeautifullTextField";

const defaultPreference = "Work From Home";
const today = new Date();

const ContactFormPage = () => {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: ["React"],
      startDate: dayjs(
        `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
      ),
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAutoCompleteChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(", ") : value,
    });
  };

  const handleDatePickerChange = (value: string | Dayjs | null | undefined) => {
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };
    setFormValues({
      ...formValues,
      startDate: dayjs(
        `${startDate.month() + 1}/${startDate.date()}/${startDate.year()}`
      ),
    });
  };

  const handleRadioChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClearClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handelAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifullTextField
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifullAutocomplete
                value={formValues.role || ""}
                onInputChange={handleAutoCompleteChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifullSelect
                value={formValues.skills || ""}
                onChange={handleSelectChange}
              />
              <BeautifullDesktopDatePicker
                value={formValues.startDate}
                onChange={handleDatePickerChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifullRadios
                value={formValues.preference}
                onChange={handleRadioChange}
                defaultPreference={defaultPreference}
              />
              <Stack>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleClearClick}>Clean</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handelAlertClick}>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
};

export default ContactFormPage;
