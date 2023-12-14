"use client";

import { contactData } from "@/app/_data/data";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Dayjs } from "dayjs";

const TablePage = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => (
            <TableRow key={contact.id}>
              {Object.entries(contact).map(([key, value]) => {
                if (key !== "id") {
                  return (
                    <TableCell key={key}>
                      {value instanceof Object && value.format
                        ? value.format("YYYY-MM-DD")
                        : value}
                    </TableCell>
                  );
                }
                return null; // возвращаем null вместо undefined
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePage;
